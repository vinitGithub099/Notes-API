const express = require("express");
const fetchNotes = require("../controller/fetchNotes");
const fetchNote = require("../controller/fetchNote");
const updateNote = require("../controller/updateNote");
const deleteNote = require("../controller/deleteNote");
const createNote = require("../controller/createNote");
const notesRouter = express.Router();

/* fetch all notes */
notesRouter.get("/fetch-notes", fetchNotes);

/* fetch note with id provided in url params */
notesRouter.get("/fetch-notes/:id", fetchNote);

/* create a new note */
notesRouter.post("/create-note", createNote);

/* update note with id provided in url params */
notesRouter.put("/update-note/:id", updateNote);

/* delete note with id provided in url params */
notesRouter.delete("/delete-note/:id", deleteNote);

module.exports = notesRouter;
