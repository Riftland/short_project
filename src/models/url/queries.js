const { sql } = require("slonik");

const insertUrls = (origin, destination) => {
  return sql.unsafe`
    INSERT INTO urls (origin, destination)
    VALUES (${origin}, ${destination});
  `;
};

module.exports = {
  insertUrls,
};
