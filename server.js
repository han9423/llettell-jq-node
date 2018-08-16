const express = require("express");
const consolidate = require("consolidate");
const chalk = require("chalk");
const winston = require("winston");
const expressWinston = require("express-winston");
const config = require("./config");

//base server
let server = express();
server.listen(config.port,()=>{
    console.log(chalk.green("sewerlabour is running on 3000"));
})


//template
server.set("view engine","html");
server.set("views",__dirname+"/views")
server.engine("html",consolidate.ejs);

//log
// server.use(expressWinston.logger({
//     transports : [
//         new winston.transports.File({
//             filename : "./logs/success.log"
//         })
//     ]
// }))
// server.use(expressWinston.errorLogger({
//     transports : [
//         new winston.transports.File({
//             filename : "./logs/error.log"
//         })
//     ]
// }))

server.get("/",(req,res)=>{
    res.render("index.ejs",{data:"dsadas"});
})

server.use(express.static(__dirname + "/www"));