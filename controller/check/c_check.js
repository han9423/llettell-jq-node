const slide = require("../../www/src/build/geetest/slide.js");
const C_user = require("../user/c_user.js");

class Geetest {
    register_silde(req, res) {
        // 向极验申请每次验证所需的challenge
        slide.register(null, function (err, data) {
            if (err) {
                console.error(err);
                res.status(500);
                res.send(err);
                return;
            }  
            if (!data.success) {
                req.session.fallback = true;
                res.send(data);
            } else {
                req.session.fallback = false;
                res.send(data);
            }
        });
    }
    validate_silde(req, res) {
        let type = req.params['type'];
        type === "login" ? C_user.login(req,res) : C_user.register(req,res);
        let judgeType =  function (err,success,type){
            if (err) {
                res.send({
                    status: "error",
                    info: err
                });
            } else if (!success) {
                // 二次验证失败
                res.send({
                    status: "fail",
                    info: `${type}失败`
                });
            } else {
                res.send({
                    status: "success",
                    info: `${type}成功`
                });
            }  
        }

        slide.validate(req.session.fallback, {
            geetest_challenge: req.body.geetest_challenge,
            geetest_validate: req.body.geetest_validate,
            geetest_seccode: req.body.geetest_seccode
        }, function (err, success) {
            type === "login" ? judgeType(err,success,"登录") : judgeType(err,success,"注册");
        });
    }
}
module.exports = new Geetest();