const { sql } = require("slonik");

const up = sql.unsafe`
  ALTER TABLE urls
  ADD COLUMN user_id uuid;
`;

const down = sql.unsafe`
  ALTER TABLE urls
  DROP COLUMN user_id;
`;

module.exports = {
  up,
  down,
};
