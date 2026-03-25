const { sql } = require("slonik");

const up = sql.unsafe`
  ALTER TABLE urls
  ADD COLUMN exp_date TIMESTAMP DEFAULT (NOW() + INTERVAL '7 days');
`;

const down = sql.unsafe`
  ALTER TABLE urls
  DROP COLUMN exp_date;
`;

module.exports = {
  up,
  down,
};
