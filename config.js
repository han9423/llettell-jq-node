const mysql = require("mysql");


module.exports = {
    port : 3000,
    db : mysql.createPool({
        user : "root",
        password : "942341345outlook",
        database : "llettell",
        url : "localhost"
    }),
    _session : {
        name : "session_llettell",
        secret : "session_llettell_sewerlabour",
        cookie : {  
            maxAge : 3600*24*10,
            httpOnly : true,
        }
    }   
}