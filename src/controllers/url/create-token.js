const { API_URL } = require("../../misc/constants");
const { getError, ErrorsIndex } = require("../../misc/errors");
const { genToken } = require("../../misc/utils");
const { saveUrls } = require("../../models/url");

module.exports = (db) => async (req, res, next) => {
  const { url } = req.body;

  if (!url) return next(getError(ErrorsIndex.INFO_NEEDED));

  const token = genToken();

  const response = await saveUrls(db)(url, token);

  if (!response.ok) return next(getError(response.errorType));

  res.status(200).json({
    success: true,
    data: {
      generated: `${API_URL}/url/${token}`,
    },
  });
};
