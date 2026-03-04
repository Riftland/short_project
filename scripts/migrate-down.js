const fs = require("fs/promises");
const path = require("path");
const db = require("../src/config/db");
const { sql } = require("slonik");

const migrationsPath = path.join(__dirname, "../migrations");

const lastMigratedId = sql.unsafe`
  SELECT id FROM migrations
  ORDER BY id DESC
  LIMIT 1;
`;

const updateControl = (id) => sql.unsafe`
  DELETE FROM migrations
  WHERE id LIKE ${id};
`;

(async () => {
  try {
    const migrationsDir = await fs.readdir(migrationsPath);
    if (!migrationsDir.length) throw Error("No migration files found");

    const connection = await db;

    const migratedId = await connection.maybeOneFirst(lastMigratedId);
    if(!migratedId) throw Error("no migrations found in control table");

    const { down } = require(path.join(migrationsPath, migratedId));
    await connection.query(down);
    await connection.query(updateControl(migratedId));

    console.log("> [SUCCESS]: rollback done! 💣");
  } catch (error) {
    console.log("> [ERROR]:", error.message);
  }
})();
