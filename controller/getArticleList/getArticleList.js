const express = require("express");
const router = express.Router();
const m_getArticleList = require("../../model/getArticleList/getArticleList");

router.get("/",(req,res)=>{
  const renderArticle = (err,data)=>{
    if(err) {console.log(err)}
    res.render("index.ejs",{articleList:data});
  }
  m_getArticleList(renderArticle);
});
module.exports = router;