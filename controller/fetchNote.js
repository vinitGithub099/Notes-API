const { ErrorHandler } = require("../middleware/error");
const Note = require("../models/note");
const { notesReponse } = require("../utils/notesSuccessReponse");

/**
 * type: GET
 * purpose: fetch note with id provided in the url params
 */
const fetchNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      throw new ErrorHandler({ statusCode: 404, message: "Note not found" });
    }
    res.json(notesReponse.get({ statusCode: 200, data: note }));
  } catch (error) {
    next(error);
  }
};

module.exports = fetchNote;
