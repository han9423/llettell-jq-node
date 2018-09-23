const db = require("../../config.js").db;
const MyCrppto = require("../../libs/MyCrypto.js");
const checkIfUser = "SELECT * FROM `user_table` WHERE `username`=? LIMIT 1";
const insertUser = "INSERT INTO `user_table` (`id`,`username`,`password`) VALUES (0,?,?)"

module.exports = function (info){
    db.query()
}