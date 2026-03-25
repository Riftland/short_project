const { encrypt } = require("../../utils");
const { getError } = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { name, email, password } = req.body;

  const { saveUser } = require("../../models/auth")(db);
  const response = await saveUser(name, email, await encrypt(password));

  if (!response.ok) return next(getError(response.errorType));

  res.status(200).json({
    success: true,
  });
};
