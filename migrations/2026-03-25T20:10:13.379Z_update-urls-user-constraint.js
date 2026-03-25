const { sql } = require("slonik");

const up = sql.unsafe`
  ALTER TABLE urls
  ADD CONSTRAINT users_fk
  FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;
`;

const down = sql.unsafe`
  ALTER TABLE urls
  DROP CONSTRAINT users_fk;
`;

module.exports = {
  up,
  down,
};
