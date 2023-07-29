import User from "../../models/user.model";

const checkUserExistsByEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: `User with ${email} email already exists` });
    }
  } catch (err) {
    return next(err);
  }

  next();
};
export default checkUserExistsByEmail;
