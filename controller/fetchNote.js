const Note = require("../models/note");

/**
 * type: GET
 * purpose: fetch note with id provided in the url params
 */
const fetchNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    next(error);
  }
};

module.exports = fetchNote;
