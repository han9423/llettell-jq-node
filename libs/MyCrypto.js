const crypto = require("crypto");
const secret =  require("../config.js").public_secret;

class MyCrypto {
    enCipher(str,callback){
        let cipher = crypto.createCipher("aes192",secret);
        let strCiphered = cipher.update(str,"utf8","hex");
        strCiphered += cipher.final("hex");
        return strCiphered;
    }
    enDeCipher(str,callback){
        let deCipher = crypto.createDecipher("aes192",secret);
        let strDeCiphered = deCipher.update(str,"hex","utf8");
        strDeCiphered +=  deCipher.final("utf8");
        return strDeCiphered;
    }
}
module.exports = new MyCrypto();