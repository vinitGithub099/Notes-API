const { ErrorHandler } = require("../middleware/error");
const Note = require("../models/note");
const { notesReponse } = require("../utils/notesSuccessReponse");

/**
 * type: PUT
 * params: id
 * purpose: update Note with id provided in url params
 */
const updateNote = async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.content) {
      throw new ErrorHandler({
        statusCode: 400,
        message: "Insufficient details",
      });
    }
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    if (!note) {
      throw new ErrorHandler({ statusCode: 404, message: "Note not found" });
    }
    res.json(notesReponse.update({ statusCode: 200, data: note }));
  } catch (error) {
    next(error);
  }
};

module.exports = updateNote;
