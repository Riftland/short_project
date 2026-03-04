const { sql } = require("slonik");

const up = sql.unsafe`
  CREATE EXTENSION "uuid-ossp";
`;

const down = sql.unsafe`
  DROP EXTENSION "uuid-ossp";
`;

module.exports = {
  up,
  down,
};
