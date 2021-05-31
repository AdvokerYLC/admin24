const express = require("express");
const router = express.Router();
const Cities = require("../models/cities");
const AdvocateCities = require("../models/advocatecity");
const GATEKEEPER = require("../engineering/gatekeeper");

//api to get cities by id
router.get("/", (req, res) => {
  Cities.find({})
    .then((cities) => {
      console.log(cities);
      GATEKEEPER.response(res, 200, cities);
    })
    .catch((err) => {
      GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
    });
});

router.get("/:id", (req, res) => {
    Cities.find({"state_id": req.params.id})
      .then((cities) => {
        console.log(cities);
        GATEKEEPER.response(res, 200, cities);
      })
      .catch((err) => {
        GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
      });
  });

  
router.get("/advocate-cities", (req, res) => {
  AdvocateCities.find({"user_id": req.params.id})
  .then((cities) => {
    console.log(cities);
    GATEKEEPER.response(res, 200, cities);
  })
  .catch((err) => {
    GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
  });
});

module.exports = router;