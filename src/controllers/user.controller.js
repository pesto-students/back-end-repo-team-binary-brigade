import bcrypt from "bcryptjs";
import User from "../models/user.model";

/**
 * 1. @addUser
 * 2. @getAllUser
 * 3. @updateUserDetails
 * 4. @deleteUser
 **/

/**
 * Adds a new user to the database with password encryption.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body object.
 * @param {string} req.body.name - The name of the user.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {string} req.body.avatar - The avatar of the user.
 * @param {string} req.body.avatar_bg_color - The background color of the user's avatar.
 * @param {string} req.body.college_id - The college ID of the user.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const addUser = async (req, res, next) => {
  const { password } = req.body;
  req.body.password = bcrypt.hashSync(password, 10);

  try {
    const user = await User.create(req.body);
    const updated_user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      avatar_bg_color: user.avatar_bg_color,
      college_id: user.college_id,
      created_at:user.createdAt,
      updated_at:user.updatedAt

    };
    return res.status(201).json(updated_user);
  } catch (err) {
    return next(err);
  }
};

/**
 * Retrieves a list of all users from the database and
 * excludes the password field from each user object in the response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} The response object with the list of all users (excluding the password field).
 */
export const getAllUser = async (req, res, next) => {
  try {
    const userList = await User.find().select("-password");
    return res.status(200).json(userList);
  } catch (err) {
    return next(err);
  }
};

/**
 * Updates the data of a user in the database.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the user to update.
 * @param {Object} req.body - The request body object containing the updated user data.
 * @param {string} req.body.name - The updated name of the user.
 * @param {string} req.body.email - The updated email of the user.
 * @param {string} req.body.avatar - The updated avatar of the user.
 * @param {string} req.body.avatar_bg_color - The updated background color of the user's avatar.
 * @param {string} req.body.college_id - The updated college ID of the user.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} The response object with a success message.
 */
export const updateUserDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User data updated successfully" });
  } catch (err) {
    return next(err);
  }
};

/**
 * Deletes a user from the database.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the user to delete.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} The response object with a success message.
 */
export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return next(err);
  }
};


