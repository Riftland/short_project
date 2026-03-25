const { getError, ErrorsIndex } = require("../misc/errors");

module.exports =
  (...fields) =>
  (req, res, next) => {
    for (const field of fields) {
      if (!req.body?.[field]) return next(getError(ErrorsIndex.INFO_NEEDED));
    }
    next();
  };
