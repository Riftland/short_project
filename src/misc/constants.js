const API_PORT = process.env.API_PORT;
const DB_URL = process.env.DB_URL;
const API_URL = process.env.API_URL;

module.exports = {
  API_PORT,
  DB_URL,
  API_URL: `${API_URL}:${API_PORT}`,
};
