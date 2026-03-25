const router = require("express").Router();
const { checker } = require("../middlewares");
const { createToken, redirect } = require("../controllers/url");
const { DataFields } = require("../misc/constants");

const genGuard = checker(DataFields.URL);

module.exports = (db) => {
  router.post("/generate", genGuard, createToken(db));
  router.get("/:id", redirect(db));

  return router;
};
