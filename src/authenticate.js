import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./models/user.model";

const router = express.Router();

/**
 * Authenticates a user login and generates a JWT token upon successful authentication.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body object.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} The response object with the logged-in user details and JWT token if login is successful.
 */
const authenticateUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // generate JWT token
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.TOKEN_VALIDITY }
    );

    const user = {
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      avatar: existingUser.avatar,
      avatar_bg_color: existingUser.avatar_bg_color,
      college_id: existingUser.college_id,
    };

    return res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    return next(err);
  }
};

const authenticationRouter = router.post("/", authenticateUser);
export default authenticationRouter;
