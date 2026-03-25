const { API_URL } = require("../../misc/constants");
const { getError, ErrorsIndex } = require("../../misc/errors");
const { genToken } = require("../../utils");

module.exports = (db) => async (req, res, next) => {
  const { url } = req.body;

  const token = genToken();

  const { saveUrls } = require("../../models/url")(db);
  const response = await saveUrls(url, token);

  if (!response.ok) return next(getError(response.errorType));

  res.status(200).json({
    success: true,
    data: {
      generated: `${API_URL}/url/${token}`,
    },
  });
};
