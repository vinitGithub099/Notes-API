const { STATUS, MESSAGE } = require("./constants");

class Response {
  constructor(status, message, data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.timestamp = new Date();
  }

  toJson() {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
      timestamp: this.timestamp,
    };
  }
}

class SuccessResponse extends Response {
  constructor(message = MESSAGE.SUCCESS, data = null, statusCode = 200) {
    super(STATUS.SUCCESS, message, data);
    this.statusCode = statusCode;
  }

  toJson() {
    return {
      ...super.toJson(),
      statusCode: this.statusCode,
    };
  }
}

class ErrorResponse extends Response {
  constructor(message = MESSAGE.ERROR, data = null, statusCode = 500) {
    super(STATUS.ERROR, message, data);
    this.statusCode = statusCode;
  }

  toJson() {
    return {
      ...super.toJson(),
      statusCode: this.statusCode,
    };
  }
}

module.exports = {
  Response,
  SuccessResponse,
  ErrorResponse,
};
