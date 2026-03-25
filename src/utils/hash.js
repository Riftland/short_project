const bcrypt = require("bcrypt");

const encrypt = async (password, rounds = 10) => {
  const salt = await bcrypt.genSalt(rounds);
  return await bcrypt.hash(password, salt);
};

const compare = (plain) => async (hash) => {
  return await bcrypt.compare(plain, hash);
};

module.exports = {
  encrypt,
  compare,
};
