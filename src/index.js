const express = require("express");
const cookieParser = require("cookie-parser");
const { PORT } = require("./misc/constants");
const db = require("./config/db");
const routes = require("./routes");
const { getError, ErrorsIndex } = require("./misc/errors");
const { exception } = require("./middlewares");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(routes(db));

app.use((req, res, next) => {
  next(getError(ErrorsIndex.NOT_FOUND));
});

app.use(exception, ({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`> [:${PORT}] Server listening 🚀`);
});
