const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4444;
const url = process.env.MONGO_URL;

app.listen(4444, () => {
  console.log("app started");
  mongoose.connect(url);
  console.log("dbconnected");
});
