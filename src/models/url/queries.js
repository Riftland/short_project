const { sql } = require("slonik");

const insertUrls = (origin, destination) => {
  return sql.unsafe`
    INSERT INTO urls (origin, destination)
    VALUES (${origin}, ${destination});
  `;
};

const selectUrl = (id) => {
  return sql.unsafe`
    SELECT origin FROM urls
    WHERE destination LIKE ${id};
  `;
};

module.exports = {
  insertUrls,
  selectUrl,
};
