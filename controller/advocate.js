const express = require("express");
const router = express.Router();
const advocate = require("../models/advocatecity");
const GATEKEEPER = require("../engineering/gatekeeper");
const cities = require("../models/cities");



// router.connect("/",(err,res) => {
//   if (err) throw err;
//  advocate.collection('cities').aggregate([
//     {
//         $lookup:{
//             from:'user',
//             localField:'user_id',
//             foreignField:'city_id',
//             as:'cities'
//         }
//     }
//  ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });

router.get("/cities/:id", (req, res) => {
  return req.params.id
  // Answers.find({})
  //   .populate("creatorId")
  //   .then((answers) => {
  //     console.log(answers);
  //     GATEKEEPER.response(res, 200, answers);
  //   })
  //   .catch((err) => {
  //     GATEKEEPER.response(res, 404, JSON.stringify({ message: err.message }));
  //   });
});
