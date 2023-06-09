class CustomAPIError extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode
  }
}

const createCustomErr = (msg, statusCode) => new CustomAPIError(msg, statusCode)


module.exports = {createCustomErr, CustomAPIError}