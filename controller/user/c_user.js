const saveUser = require("../../model/saveUser/UserToMysql.js");
const myCrypto = require("../../libs/MyCrypto.js");

class C_user {
    login(req,res){
        
    }

    register(req,res){
        let userInfo = req.body;
        let {username,password} = userInfo;
        username = myCrypto.enCipher(username);
        password = myCrypto.enCipher(password);
        saveUser({username,password});
    }
}

module.exports = new C_user();
