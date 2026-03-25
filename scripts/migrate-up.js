const fs = require("fs/promises");
const path = require("path");
const db = require("../src/config/db");
const { sql } = require("slonik");

const migrationsPath = path.join(__dirname, "../migrations");

const createControl = sql.unsafe`
  CREATE TABLE IF NOT EXISTS migrations (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
  );
`;

const selectMigratedIds = sql.unsafe`
  SELECT id FROM migrations;
`;

const updateControl = (id) => sql.unsafe`
  INSERT INTO migrations (id)
  VALUES (${id});
`;

(async () => {
  try {
    const migrationsDir = await fs.readdir(migrationsPath);
    if (!migrationsDir.length) throw Error("No migration files found");

    const connection = await db;

    await connection.query(createControl);
    const migratedIds = await connection.query(selectMigratedIds);
    const migratedList = new Set(migratedIds.rows.map(({ id }) => id));

    for await (const file of migrationsDir) {
      if (migratedList.has(file)) {
        console.log(`> file ${file} migrated, skipping...`);
        continue;
      }
      const { up } = require(path.join(migrationsPath, file));
      await connection.query(up);
      await connection.query(updateControl(file));
    }
    console.log("> [SUCCESS]: migrations done! 🚀");
  } catch (error) {
    console.log("> [ERROR]:", error.message);
  }
})();
