const { ErrorHandler } = require("../middleware/error");
const Note = require("../models/note");
const { notesReponse } = require("../utils/notesSuccessReponse");

/**
 * type: POST
 * purpose: create a new note
 */
const createNote = async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.content) {
      throw new ErrorHandler({
        statusCode: 400,
        message: "Insufficient details",
      });
    }
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.json(notesReponse.create({ statusCode: 201, data: note }));
  } catch (error) {
    next(error);
  }
};

module.exports = createNote;
