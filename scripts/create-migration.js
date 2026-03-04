const fs = require("fs/promises");
const path = require("path");

const migrationsPath = path.join(__dirname, "../migrations");

const template = `const { sql } = require("slonik");

const up = sql.unsafe\`\`;

const down = sql.unsafe\`\`;

module.exports = {
  up,
  down,
};
`;

(async () => {
  try {
    const [, , input] = process.argv;
    if (!input) throw Error("> escríbeme algo, hombre!");

    const fileName = `${new Date().toISOString()}_${input}.js`;
    await fs.writeFile(path.join(migrationsPath, fileName), template);

    console.log("> [SUCCESS]: migration file successfully created");
  } catch (error) {
    console.log("> [ERROR]:", error.message);
  }
})();
