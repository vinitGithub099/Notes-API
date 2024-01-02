const Note = require("../models/note");
const { notesReponse } = require("../utils/notesSuccessReponse");

/**
 * type: GET
 * purpose: fetch all notes
 */
const fetchNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.json(notesReponse.getAll({ statusCode: 200, data: notes }));
  } catch (error) {
    next(error);
  }
};

module.exports = fetchNotes;
