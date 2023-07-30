import express from "express";
import userController from "../controllers/user.controller";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import checkUserExistsByEmail from "../middlewares/user/checkUserExistsByEmail";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/",
  validateRequiredKeys(["name", "email", "password", "college_id"]),
  checkUserExistsByEmail,
  userController.createUser
);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
