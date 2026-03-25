const { ErrorsIndex, CError } = require("../../misc/errors");
const { catcher } = require("../../utils");
const { insertUser, selectUser } = require("./queries");

const saveUser = (db) => async (name, email, password) => {
  const connection = await db;
  await connection.query(insertUser(name, email, password));

  return {
    ok: true,
  };
};

const getUser = (db) => async (email, compareFn) => {
  const connection = await db;
  const user = await connection.maybeOne(selectUser(email));

  if (!user || !(await compareFn(user.password))) {
    throw new CError(ErrorsIndex.BAD_INFO);
  }

  const { name } = user;

  return {
    ok: true,
    content: {
      user: { name, email },
    },
  };
};

module.exports = (db) => {
  return {
    saveUser: catcher(saveUser(db)),
    getUser: catcher(getUser(db)),
  };
};
