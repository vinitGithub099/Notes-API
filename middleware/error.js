const { ErrorResponse } = require("../utils/respone");

class ErrorHandler extends Error {
  constructor({ statusCode, message }) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const data = err.data || {};
  res
    .status(statusCode)
    .json(new ErrorResponse(message, data, statusCode).toJson());
};

module.exports = {
  ErrorHandler,
  handleError,
};
