import User from "../../models/user.model";

const checkUserDoesNotExistsByEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(409)
        .json({ message: `User with ${email} email doesn't exist` });
    }
  } catch (err) {
    return next(err);
  }

  next();
};
export default checkUserDoesNotExistsByEmail;
