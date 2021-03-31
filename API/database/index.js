const mysql = require("mysql");
const util = require("util");

const db = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bbe61cedaecaa5",
  password: "f794ce16",
  database: "heroku_5ec37ddc6381537",
  port: 3306,
});

const query = util.promisify(db.query).bind(db);

module.exports = query;
