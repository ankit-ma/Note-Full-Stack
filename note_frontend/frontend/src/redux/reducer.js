const initialState = {
  notes: [],
  // ...
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    // ...
    default:
      return state;
  }
};
