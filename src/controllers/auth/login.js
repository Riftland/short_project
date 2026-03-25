const { getError } = require("../../misc/errors");
const { serialize } = require("../../utils");
const { compare } = require("../../utils/hash");

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  const { getUser } = require("../../models/auth")(db);
  const response = await getUser(email, compare(password));

  if (!response.ok) return next(getError(response.errorType));

  serialize(res)(response.content.user);

  res.status(200).json({
    success: true,
    data: {
      name: response.content.user.name,
    },
  });
};
