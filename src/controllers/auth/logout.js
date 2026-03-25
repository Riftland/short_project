const { destroy } = require("../../utils");

module.exports = () => (req, res, next) => {
  destroy(res);

  res.status(200).json({
    success: true,
  });
};
