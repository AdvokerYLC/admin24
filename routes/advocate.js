var express = require("express");
var router = express.Router();

const advocate = require("../controller/advocate");

router.use("/", advocate);

module.exports = router;