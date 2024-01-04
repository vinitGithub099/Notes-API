const { ErrorHandler } = require("../middleware/error");
const Note = require("../models/note");
const { notesReponse } = require("../utils/notesSuccessReponse");

/**
 * type: DELETE
 * params: id
 * purpose: delete Note with id provided in url params
 */
const deleteNote = async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new ErrorHandler({
        statusCode: 400,
        message: "id parameter missing",
      });
    }
    const note = await Note.findOneAndDelete({ _id: req.params.id });
    if (!note) {
      throw new ErrorHandler({ statusCode: 404, message: "Note not found" });
    }
    res.json(notesReponse.delete({ statusCode: 204, data: note }));
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNote;
