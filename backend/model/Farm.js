const mongoose = require("mongoose");
const farmSchema = mongoose.Schema({
  farm_name: {
    type: String,
    require: [true, "Please enter farm name"],
  },
  balance: {
    type: Number,
    require: [true, "Please enter balance"],
  },
});
module.exports = mongoose.model("FarmModel", farmSchema);
