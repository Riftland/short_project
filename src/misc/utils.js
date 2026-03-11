const genToken = (len = 8) => {
  return Math.random().toString(36).slice(2, len);
};

module.exports = {
  genToken,
};
