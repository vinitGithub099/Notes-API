const Note = require("../models/note");

/**
 * type: GET
 * purpose: fetch all notes
 */
const fetchNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

module.exports = fetchNotes;
