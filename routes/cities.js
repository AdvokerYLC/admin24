var express = require("express");
var router = express.Router();

const cities = require("../controller/cities");

router.use("/", cities);

module.exports = router;