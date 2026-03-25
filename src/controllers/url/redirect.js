const { getError } = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const { getOrigin } = require("../../models/url")(db);
  const response = await getOrigin(id);

  if (!response.ok) return next(getError(response.errorType));

  res.redirect(307, response.content.url);
};
