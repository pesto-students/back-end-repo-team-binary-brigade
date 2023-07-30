import express from "express";
import userController from "../controllers/user.controller";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import checkUserExistsByEmail from "../middlewares/user/checkUserExistsByEmail";
import restrictEmailUpdate from "../middlewares/user/restrictEmailUpdate";
import checkUserDoesNotExistsByEmail from "../middlewares/user/checkUserDoesNotExistsByEmail";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserDetails);
userRouter.post(
  "/",
  validateRequiredKeys(["name", "email", "password", "college_id"]),
  checkUserExistsByEmail,
  userController.createUser
);
userRouter.patch("/:id", restrictEmailUpdate, userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.post(
  "/send-otp",
  checkUserDoesNotExistsByEmail,
  userController.forgetUserPassword
);

export default userRouter;
