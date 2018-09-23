const fs = require("fs");
const async = require("async");
const {resolve} = require("path");
const express = require("express");
const db = require("../../config").db;
const router = express.Router();

// 回调太烦了 不符合MVC 不建议这样写
router.get("/:articleName",(req,res)=>{
    let id = req.params['articleName'].match(/\d/g)[0];
    db.query("SELECT * FROM `article_table` WHERE `id`=?",[id],(err,data)=>{
        if(err) console.log(err);
        let readFiles = (next)=>{
            let path = resolve(__dirname,data[0].path);
            fs.readFile(path,{encoding:"utf8"},(err,data)=>{
                if(err) console.log(err);
                next(err,data.toString());
            })  
        }
        let renderFile = (prev,next)=>{
            data[0]['text'] = prev; 
            res.render("contentText.ejs",{content:data});
        }
        async.waterfall([readFiles,renderFile],(err,result)=>{
            if(err) console.log(err);
        }); 
    })
})

module.exports = router;
