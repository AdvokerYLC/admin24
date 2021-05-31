var express = require("express");
var router = express.Router();

const states = require("../controller/states");

router.use("/", states);

module.exports = router;
