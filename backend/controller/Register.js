import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models/User";

export const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
      return res.status(400).json({
        message: "All fileds required",
      });
    }
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({
      message: "User Registered",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
