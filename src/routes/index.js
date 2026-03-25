const router = require("express").Router();
const urlRoutes = require("./url");
const authRoutes = require("./auth");

module.exports = (db) => {
  router.use("/url", urlRoutes(db));
  router.use("/auth", authRoutes(db));

  return router;
};
