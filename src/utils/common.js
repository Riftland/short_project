const isSecure = (url) => {
  return !!url?.includes("https");
};

module.exports = {
  isSecure,
};
