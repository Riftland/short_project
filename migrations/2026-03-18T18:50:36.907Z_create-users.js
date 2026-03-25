const { sql } = require("slonik");

const up = sql.unsafe`
  CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
`;

const down = sql.unsafe`
  DROP TABLE users;
`;

module.exports = {
  up,
  down,
};
