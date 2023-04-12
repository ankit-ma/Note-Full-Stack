require("dotenv").config();
const jwt = require("jsonwebtoken");
const HttpError = require("../model/Http-error");

const Note = require("../model/note");
const { findById } = require("../model/user");

const addNote = async (req, res, next) => {
  const { title, content, createdBy, dateCreated, lastModified } = req.body;
  console.log(req.body);
  let datas = {
    title,
    content,
    createdBy,
    dateCreated: new Date(dateCreated),
    lastModified: new Date(lastModified),
  };
  console.log(datas);
  try {
    datas = await Note.create(datas);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong", 404);
    return next(error);
  }
  res.status(201).json(datas);
};

const getAllNote = async (req, res, next) => {
  let note;
  try {
    note = await Note.find();
  } catch (err) {
    const error = new HttpError("Fetching data error", 500);
    return next(error);
  }
  if (note.length == 0 || !note) {
    const error = new Error("Cound not find a note");
    error.code = 404;
    return next(error);
  }
  res.status(200).json({
    notes: note.map((note) => {
      return note.toObject({ getters: true });
    }),
  });
};
const deleteByID = async (req, res, next) => {
  const _id = req.params.id;
  console.log(_id);
  let note;
  try {
    await Note.deleteOne({ _id });
  } catch (err) {
    const error = new HttpError("Could not find note with given id", 500);
    return next(error);
  }
  //     try {
  //       await note.remove();
  //     } catch (err) {
  //       const error = new HttpError(
  //         "Some database error happend while deleting",
  //         500
  //       );
  //       return next(error);
  //     }
  res.status(200).json({ message: "deleted successfully" });
};

const getAllNoteById = async (req, res, next) => {
  const id = req.params.id;
  //console.log(id);
  let notes;
  try {
    notes = await Note.findById(id);
  } catch (err) {
    const error = new HttpError("COuld not find username notes", 500);
    return next(error);
  }
  res.status(200).json(notes);
};
const updateNoteById = async (req, res, next) => {
  const id = req.params.id;
  const update = req.body;
  let note;
  try {
    note = await Note.findById(id);
  } catch (err) {
    const error = new HttpError("COuld not find username notes", 500);
    return next(error);
  }
  //console.log(update);
  note.title = update.title;
  note.content = update.content;
  note.dateCreated = update.dateCreated;
  note.lastModified = update.lastModified;
  //console.log(note);
  try {
    await note.save();
  } catch (err) {
    const error = new HttpError("Not able to save in database", 500);
    return next(error);
  }

  res.status(200).json({ message: "successfull update" });
};
exports.addNote = addNote;
exports.getAllNote = getAllNote;
exports.deleteByID = deleteByID;
exports.getAllNoteById = getAllNoteById;
exports.updateNoteById = updateNoteById;
