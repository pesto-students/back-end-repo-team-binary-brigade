import bcrypt from "bcryptjs";
import otpGenerator from "otp-generator";
import userService from "../services/user.service";

const userController = {
  // get all user list
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.find(req.query);
      return res.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  },

  // get user details by id
  getUserDetails: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await userService.get(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },

  // create user
  createUser: async (req, res, next) => {
    const { password } = req.body;
    req.body.password = bcrypt.hashSync(password, 10);

    try {
      const user = await userService.create(req.body);
      const updated_user = {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        avatar_bg_color: user.avatar_bg_color,
        college_id: user.college_id,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      };
      return res.status(201).json(updated_user);
    } catch (error) {
      return next(error);
    }
  },

  // update user details
  updateUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedUser = await userService.update(id, req.body);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return next(error);
    }
  },

  // delete user
  deleteUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      await userService.remove(id);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },

  // forget password
  forgetUserPassword: async (req, res, next) => {
    const { email } = req.body;

    // Generate a random 6-digit OTP
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    // Store OTP in the session
    req.session.otp = otp;
    return res.status(200).json({ message: "OTP sent successfully.", otp });
  },

  // verify otp
  verifyOtp: async (req, res, next) => {
    const { otp } = req.body;
    const storedOTP = req.session.otp;

    if (otp === storedOTP) {
      req.session.otp = null;
      return res.status(200).json({ message: "OTP verified successfully." });
    } else {
      return res.status(401).json({ message: "Invalid OTP." });
    }
  },
};

export default userController;
