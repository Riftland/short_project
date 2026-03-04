const db = require("slonik");
const { DB_URL } = require("../misc/constants");

module.exports = db.createPool(DB_URL);
