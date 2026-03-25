const { getError, ErrorsIndex } = require("../misc/errors");

module.exports = ({ statusCode, error }, req, res, next) => {
  if (!statusCode || !error) {
    return next(getError(ErrorsIndex.API_ERROR));
  }
  return next({ statusCode, error });
};
