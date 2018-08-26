const express = require("express");
const chalk = require("chalk");
const config = require("./config");
const test = require("./test/test");
const index = require("./routes/index");
//base server
let server = express();
server.listen(config.port,()=>{
    console.log(chalk.green("sewerlabour is running on 3000"));
})
///////////////
var bodyParser = require('body-parser');
var session = require('express-session');

var Geetest = require('gt3-sdk');


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true
}));

/////////////////


//savelog
// config.winston(server);

//templates
config.consolidate(server);

// routes
index(server);



    

////////////////////
var slide = require('./www/src/build/geetest/slide');

server.get("/gt/register-slide", function (req, res) {
    // 向极验申请每次验证所需的challenge
    slide.register(null, function (err, data) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send(err);
            return;
        }

        if (!data.success) {
            // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
            // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址

            // 为以防万一，你可以选择以下两种方式之一：

            // 1. 继续使用极验提供的failback备用方案
            req.session.fallback = true;
            res.send(data);

            // 2. 使用自己提供的备用方案
            // todo

        } else {
            // 正常模式
            req.session.fallback = false;
            res.send(data);
        }
    });
});
server.post("/gt/validate-slide", function (req, res) {
    console.log(req.url,"post")
    // 对ajax提供的验证凭证进行二次验证
    slide.validate(req.session.fallback, {
        geetest_challenge: req.body.geetest_challenge,
        geetest_validate: req.body.geetest_validate,
        geetest_seccode: req.body.geetest_seccode
    }, function (err, success) {

        if (err) {
            // 网络错误
            res.send({
                status: "error",
                info: err
            });

        } else if (!success) {

            // 二次验证失败
            res.send({
                status: "fail",
                info: '登录失败'
            });
        } else {

            res.send({
                status: "success",
                info: '登录成功'
            });
        }
    });
});
//////////////////////////



server.use(express.static(__dirname + "/www"));