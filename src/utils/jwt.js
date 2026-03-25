const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../misc/constants");

const sign = (payload) => {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  } catch (error) {
    console.log("> error [sign jwt]:", error.message);
    return null;
  }
};

const verify = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log("> error [verify jwt]:", error.message);
    return null;
  }
};

module.exports = {
  sign,
  verify,
};
