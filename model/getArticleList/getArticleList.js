const db = require("../../config").db;
const selectAll = "SELECT * FROM `article_table`";

module.exports = function(callback){
    db.query(selectAll,(err,data)=>{
      callback(err,data);
    });
}

