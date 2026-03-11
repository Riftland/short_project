const express = require("express");
const { API_PORT } = require("./misc/constants");
const db = require("./config/db");
const routes = require("./routes");
const { getError, ErrorsIndex } = require("./misc/errors");

const app = express();
app.use(express.json());

app.use(routes(db));

app.use((req, res, next) => {
  next(getError(ErrorsIndex.NOT_FOUND));
});

app.use(({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(API_PORT, () => {
  console.log(`> [:${API_PORT}] Server listening 🚀`);
});
