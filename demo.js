const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    console.log("check")
    res.end();
})

module.exports = router;