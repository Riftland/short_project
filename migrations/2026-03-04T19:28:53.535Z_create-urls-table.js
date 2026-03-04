const { sql } = require("slonik");

const up = sql.unsafe`
  CREATE TABLE urls (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    origin VARCHAR(150) NOT NULL,
    destination VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
`;

const down = sql.unsafe`
  DROP TABLE urls;
`;

module.exports = {
  up,
  down,
};
