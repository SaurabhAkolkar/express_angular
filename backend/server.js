const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config/.env" });
const db = require("./config/db");
db();
const customer = require("./routes/customer");
const farm = require("./routes/farm");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", customer);
app.use("/api/v1", farm);
app.listen(process.env.PORT, () => {
  console.log("server is running".green);
});
