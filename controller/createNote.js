const Note = require("../models/note");

/**
 * type: POST
 * purpose: create a new note
 */
const createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.json(note);
  } catch (error) {
    next(error);
  }
};

module.exports = createNote;
