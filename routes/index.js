const mainPage = require("./pages/mainPage");
const contentText = require("./content/contentText");
const user = require("./user/user");
module.exports = (app)=>{
    app.use("/",mainPage);
    app.use("/contentText",contentText);
    app.use("/user",user);
}
