const { sql } = require("slonik");

const up = sql.unsafe`
  ALTER TABLE urls
  ADD COLUMN redirections INTEGER DEFAULT 0,
  ADD COLUMN unknown_redirections INTEGER DEFAULT 0;
`;

const down = sql.unsafe`
  ALTER TABLE urls
  DROP COLUMN redirections,
  DROP COLUMN unknown_redirections;
`;

module.exports = {
  up,
  down,
};
