const mysql = require("mysql");
const log4js = require('log4js');

// load config
log4js.configure("./conf/log4js.json")
const logger = log4js.getLogger("dev");

let pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "123456",
    database: "monitor"
})


let query = function (sql, options, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null);
        } else {
            conn.query(sql, options, function (err, results) {
                callback(err, results);
            });
            conn.release();
        }
    });
};

module.exports = {
    query: query,
    logger: logger,
}