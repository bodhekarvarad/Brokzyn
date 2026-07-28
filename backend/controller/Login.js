import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models/User.js";
dotenv.config();

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!isMatch) {
      return res.status(401).json({
        message: "Invaild Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      },
    );
    res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
