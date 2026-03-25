const router = require("express").Router();
const { register, login, logout } = require("../controllers/auth");
const { authorizer, checker } = require("../middlewares");
const { DataFields } = require("../misc/constants");

const loginFields = checker(DataFields.EMAIL, DataFields.PASSWORD);
const registerFields = checker(
  DataFields.NAME,
  DataFields.EMAIL,
  DataFields.PASSWORD,
);

module.exports = (db) => {
  router.post("/register", registerFields, register(db));
  router.post("/login", loginFields, login(db));
  router.post("/logout", authorizer, logout(db));

  return router;
};
