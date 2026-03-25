const { DEFAULT_COOKIE_NAME } = require("../misc/constants");
const { getError, ErrorsIndex } = require("../misc/errors");
const { verify, deserialize } = require("../utils");

module.exports = (req, res, next) => {
  const user = deserialize(req);
  if (!user) return next(getError(ErrorsIndex.UNAUTHORIZED));
  res.local = user ?? {};
  next();
};
