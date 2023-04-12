const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdBy: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  lastModified: { type: Date, required: true },
});
module.exports = model("note", noteSchema);
