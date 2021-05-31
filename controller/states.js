const express = require("express");
const router = express.Router();
const States = require("../models/states");
const GATEKEEPER = require("../engineering/gatekeeper");

//api to get all states from DB
router.get("/", (req, res) => {
  States.find({})
    .then((states) => {
      console.log(states);
      GATEKEEPER.response(res, 200, states);
    })
    .catch((err) => {
      GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
    });
});

router.get("/:id", (req, res) => {
  States.find({"country_id": req.params.id})
    .then((states) => {
      console.log(states);
      GATEKEEPER.response(res, 200, states);
    })
    .catch((err) => {
      GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
    });
});


module.exports = router;