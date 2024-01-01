const Note = require("../models/note");

/**
 * type: DELETE
 * params: id
 * purpose: delete Note with id provided in url params
 */
const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNote;
