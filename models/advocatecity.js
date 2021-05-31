const mongoose = require("mongoose");

const advocatecitySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    city_id:{
        type:String,
    },
  }

);

module.exports = mongoose.model("advocatecity", advocatecitySchema);