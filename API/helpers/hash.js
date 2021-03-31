const Crypto = require("crypto");
const hashPassword = (pass) =>
  Crypto.createHmac("sha256", "hashKey").update(pass).digest("hex");

module.exports = hashPassword;
