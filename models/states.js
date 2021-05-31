const mongoose = require("mongoose");

const statesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    
  }

);

module.exports = mongoose.model("states", statesSchema);