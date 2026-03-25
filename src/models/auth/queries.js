const { sql } = require("slonik");

const insertUser = (name, email, password) => {
  return sql.unsafe`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${password});
  `;
};

const selectUser = (email) => {
  return sql.unsafe`
    SELECT name, email, password
    FROM users
    WHERE email LIKE ${email};
  `;
};

module.exports = {
  insertUser,
  selectUser,
};
