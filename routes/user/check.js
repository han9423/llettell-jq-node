const router = require("express").Router();
const c_check = require("../../controller/check/c_check.js");
var bodyParser = require('body-parser');
var session = require('express-session');

router.use("/gt/register-slide",c_check.register_silde);
router.use("/gt/validate-slide/:type",c_check.validate_silde);
module.exports = router;
