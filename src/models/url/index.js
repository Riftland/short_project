const { ErrorsIndex } = require("../../misc/errors");
const { insertUrls } = require("./queries");

const saveUrls = (db) => async (origin, destination) => {
  try {
    const connection = await db;
    await connection.query(insertUrls(origin, destination));

    return {
      ok: true,
    };
  } catch (error) {
    console.log("> error [saveUrls]:", error.message);
    return {
      ok: false,
      errorType: ErrorsIndex.API_ERROR,
    };
  }
};

module.exports = {
  saveUrls,
};
