const express = require("express");
const chalk = require("chalk");
const config = require("./config");
const test = require("./test/test");
const index = require("./routes/index");
const bodyParser = require('body-parser');
const session = require('express-session');
// const serverListener = require("")
//base server 
let server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(session(config._session));

//savelog
// config.winston(server);

//templates
config.consolidate(server);

// routes
index(server);

server.use(express.static(__dirname + "/www"));
server.listen(3000,"localhost",()=>{
    console.log(chalk.green(`sewerlabour is running on 3000`));
})



