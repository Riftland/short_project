const db = require("../src/config/db");
const { sql } = require("slonik");

const getMigrationsInfo = sql.unsafe`
  SELECT id FROM migrations;
`;

(async () => {
  try {
    const connection = await db;

    const { rowCount, rows } = await connection.query(getMigrationsInfo);

    console.log(`\n> total migrations: ${rowCount}`);
    console.log(`> last migration: ${rows[rows.length - 1]?.id ?? "none"}`);

    console.log(rows.length ? "\n=== RESULTS ===" : "");
    for (const row of rows) {
      console.log(`> ${row?.id}`);
    }
  } catch (error) {
    console.log("> [ERROR]:", error.message);
  }
})();
