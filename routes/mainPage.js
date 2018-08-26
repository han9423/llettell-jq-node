const express = require("express");
const config = require("../config");
const router = express.Router();

router.get("/",(req,res)=>{
    var db = config.db;
    db.query("SELECT * FROM `article_table`",(err,data)=>{
        if(err) console.log(err);
        res.render("index.ejs",{test:data});
    })
})

module.exports = router;