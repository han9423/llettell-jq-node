const express = require("express");
const fs = require("fs");
const c_user = require("../../controller/user/c_user.js");
const check = require("./check.js")
let router = express.Router();

router.get("/login_box.html",(req,res)=>{
    fs.readFile("./www/src/build/login_box.html",(err,data)=>{
        if(err) console.log(err);
        res.send(data.toString());
        res.end();
    })
})
router.use("/",check);

// router.use("/login");
module.exports = router;