const ErrorsIndex = {
  INFO_NEEDED: "infoNeeded",
  BAD_INFO: "badInfo",
  NOT_FOUND: "notFound",
  API_ERROR: "apiError",
  UNAUTHORIZED: "unauthorized",
};

const errorsCatalog = {
  infoNeeded: {
    statusCode: 400,
    error: new Error("no info provided"),
  },
  badInfo: {
    statusCode: 400,
    error: new Error("incorrect email or password"),
  },
  unauthorized: {
    statusCode: 401,
    error: new Error("unauthorized"),
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

class CError extends Error {
  constructor(errorType, message) {
    super(message ?? errorType ?? "");
    this.errorType = errorType;
  }
}

module.exports = {
  ErrorsIndex,
  errorsCatalog,
  getError,
  CError,
};
