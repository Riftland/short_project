const { ErrorsIndex, CError } = require("../../misc/errors");
const { insertUrls, selectUrl } = require("./queries");
const { catcher } = require("../../utils");

const saveUrls = (db) => async (origin, destination) => {
  const connection = await db;
  await connection.query(insertUrls(origin, destination));

  return {
    ok: true,
  };
};

const getOrigin = (db) => async (id) => {
  const connection = await db;
  const origin = await connection.maybeOneFirst(selectUrl(id));

  if (!origin) throw new CError(ErrorsIndex.NOT_FOUND);

  return {
    ok: true,
    content: {
      url: origin,
    },
  };
};

module.exports = (db) => {
  return {
    saveUrls: catcher(saveUrls(db)),
    getOrigin: catcher(getOrigin(db)),
  };
};
