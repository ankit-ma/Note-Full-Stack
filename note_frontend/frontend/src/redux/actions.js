export const deleteNote = (noteId) => async (dispatch) => {
  try {
    // Make API call to delete note from database
    await api.delete(`/notes/${noteId}`);

    // Dispatch action to remove note from Redux store
    dispatch({ type: "DELETE_NOTE", payload: noteId });
  } catch (error) {
    // Handle error
  }
};
