const mysql = require("mysql");
const winston = require("winston");
const consolidate = require("consolidate");
const expressWinston = require("express-winston");
module.exports = {
    port: 3000,
    db: mysql.createPool({
        user: "root",
        password: "outlook9423",
        database: "blog_llettell",
        url: "localhost"
    }),
    _session: {
        name: "session_llettell",
        secret: "session_llettell_sewerlabour",
        cookie: {
            maxAge: 3600 * 24 * 10,
            httpOnly: true,
        }
    },
    consolidate(app) {
        app.set("view engine", "html");
        app.set("views", __dirname + "/views")
        app.engine("html", consolidate.ejs);
    },
    winston(app) {
        app.use(expressWinston.logger({
            transports: [
                new winston.transports.File({
                    filename: "./logs/success.log"
                })
            ]
        }))
        app.use(expressWinston.errorLogger({
            transports: [
                new winston.transports.File({
                    filename: "./logs/error.log"
                })
            ]
        }))
    },  
}