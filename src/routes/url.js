const router = require("express").Router();
const { createToken } = require("../controllers/url");

module.exports = (db) => {
  router.post("/generate", createToken(db));

  return router;
};
