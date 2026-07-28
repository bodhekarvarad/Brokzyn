const express = require("express");

const { login } = require("../controller/Login.js");
const { register } = require("../controller/Register.js");
const { auth } = require("../middleware/authentication.js");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

module.exports = router;
