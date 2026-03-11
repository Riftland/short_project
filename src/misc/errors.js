const ErrorsIndex = {
  INFO_NEEDED: "infoNeeded",
  NOT_FOUND: "notFound",
  API_ERROR: "apiError",
};

const errorsCatalog = {
  infoNeeded: {
    statusCode: 400,
    error: new Error("no info provided"),
  },
  notFound: {
    statusCode: 404,
    error: new Error("resource not found"),
  },
  apiError: {
    statusCode: 500,
    error: new Error("something went wrong"),
  },
};

const getError = (index) => {
  return errorsCatalog[index ?? ErrorsIndex.API_ERROR];
};

module.exports = {
  ErrorsIndex,
  errorsCatalog,
  getError,
};
