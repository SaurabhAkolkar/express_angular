const express = require("express");
const router = express.Router();
const { createFarm, getAllFarm, deleteFarm } = require("../controller/farm");
router.route("/farm").get(getAllFarm);
router.route("/farm/:id").delete(deleteFarm);

module.exports = router;
