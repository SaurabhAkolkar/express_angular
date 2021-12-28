const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
  cust_name: {
    type: String,
    require: [true, "Please enter customer name"],
  },
  balance: {
    type: Number,
    require: [true, "Please enter balance"],
  },
});
module.exports = mongoose.model("CustomerModel", customerSchema);
