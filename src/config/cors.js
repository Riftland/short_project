const WHITELIST = ["localhost"];

module.exports = {
  origin: (origin, callback) => {
    console.log("> data:", { origin, callback });
    if (!origin) return callback(null, true);
    const match = WHITELIST.find((domain) => origin.includes(domain));

    match ? callback(null, true) : callback(null, false);
  },
  credentials: true,
};
