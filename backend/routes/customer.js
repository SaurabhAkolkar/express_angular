const express = require("express");
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
} = require("../controller/customer");
router.route("/customer").post(createCustomer).get(getAllCustomer);
router.route("/customer/:id").delete(deleteCustomer);

module.exports = router;
