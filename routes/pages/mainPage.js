const express = require("express");
const config = require("../../config");
const getArticleList = require("../../controller/getArticleList/getArticleList");
const router = express.Router();


router.get("/",(req,res,next)=>{
    let checkSession = req.session;
    if(checkSession){
        
    };
    next();
})

// router.get("/",(req,res)=>{
//     var db = config.db;
//     db.query("SELECT * FROM `article_table`",(err,data)=>{
//         if(err) console.log(err);
//         res.render("index.ejs",{test:data});
//     })
// })

router.get("/",getArticleList);

module.exports = router;