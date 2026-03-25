const API_PORT = process.env.API_PORT;
const DB_URL = process.env.DB_URL;
const API_URL = process.env.API_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const DEFAULT_COOKIE_NAME = "access_token";
const DEFAULT_EXP_TIME = 3_600_000;

const DataFields = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
  URL: "url",
};

module.exports = {
  API_PORT,
  DB_URL,
  API_URL: `${API_URL}:${API_PORT}`,
  JWT_SECRET,
  DEFAULT_COOKIE_NAME,
  DEFAULT_EXP_TIME,
  DataFields,
};
