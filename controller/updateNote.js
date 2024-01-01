const Note = require("../models/note");

/**
 * type: PUT
 * params: id
 * purpose: update Note with id provided in url params
 */
const updateNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    next(error);
  }
};

module.exports = updateNote;
