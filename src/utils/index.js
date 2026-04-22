const jwt = require("./jwt");
const cookie = require("./cookie");
const { DEFAULT_COOKIE_NAME } = require("../misc/constants");

const genToken = (len = 8) => {
  return Math.random().toString(36).slice(2, len);
};

const catcher =
  (fn, tag = "") =>
  async (...params) => {
    try {
      return await fn(...params);
    } catch (error) {
      console.log(`> error [${tag}]:`, error.message);
      return {
        ok: false,
        errorType: error.errorType ?? ErrorsIndex.API_ERROR,
      };
    }
  };

const serialize = (res) => (payload) => {
  const token = jwt.sign(payload);
  cookie.create(res)(token);
};

const deserialize = (req) => {
  const jwtToken = req.cookies[DEFAULT_COOKIE_NAME];
  const payload = jwt.verify(jwtToken);
  if (!payload) return null;
  const { iat, exp, ...rest } = payload;
  return rest;
};

module.exports = {
  genToken,
  ...require("./hash"),
  ...jwt,
  ...cookie,
  serialize,
  deserialize,
  catcher,
};
