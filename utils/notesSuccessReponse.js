const { SuccessResponse } = require("./respone");

const notesReponse = {
  create: ({ statusCode, data }) =>
    new SuccessResponse("Note created sucessfully", data, statusCode).toJson(),
  update: ({ statusCode, data }) =>
    new SuccessResponse("Note updated sucessfully", data, statusCode).toJson(),
  delete: ({ statusCode, data }) =>
    new SuccessResponse("Note Deleted sucessfully", data, statusCode).toJson(),
  get: ({ statusCode, data }) =>
    new SuccessResponse(
      "Note retreived sucessfully",
      data,
      statusCode
    ).toJson(),
  getAll: ({ statusCode, data }) =>
    new SuccessResponse(
      "Notes retrieved sucessfully",
      data,
      statusCode
    ).toJson(),
};

module.exports = { notesReponse };
