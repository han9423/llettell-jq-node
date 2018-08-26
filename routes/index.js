const mainPage = require("./mainPage");
const contentText = require("./contentText");
const user = require("./user");
module.exports = (app)=>{
    app.use("/",mainPage);
    app.use("/contentText",contentText);
    app.use("/user",user);
}
