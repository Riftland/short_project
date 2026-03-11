const router = require("express").Router();
const urlRoutes = require("./url");

module.exports = (db) => {
  router.use("/url", urlRoutes(db));

  return router;
};
