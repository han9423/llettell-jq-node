const express = require("express");
const chalk = require("chalk");
const fs = require("fs");
let router = express.Router();

router.get("/login_box.html",(req,res)=>{
    // 妈的超时
    // var options_sendFile = {
    //     root : "../www",
    //     dotfiles: 'deny',
    //     headers: {
    //         'x-timestamp': Date.now(),
    //         'x-sent': true
    //     }
    // }
    // res.sendFile("src/build/login_box.html",options_sendFile,(err)=>{
    //     if(err) console.log(chalk.red(err));
    // });
    fs.readFile("./www/src/build/login_box.html",(err,data)=>{
        if(err) console.log(err);
        res.send(data.toString());
        res.end();
    })
})

module.exports = router;