import express from "express";

import { login } from "../controller/Login.js";
import { register } from "../controller/Register.js";
import { auth } from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

export default router;
