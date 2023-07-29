import express from "express";
import {
  addUser,
  deleteUser,
  getAllUser,
  updateUserDetails,
} from "../controllers/user.controller";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import checkUserExistsByEmail from "../middlewares/user/checkUserExistsByEmail";

const userRouter = express.Router();

userRouter.post(
  "/",
  validateRequiredKeys(["name", "email", "password", "college_id"]),
  checkUserExistsByEmail,
  addUser
);
userRouter.get("/", getAllUser);
userRouter.put("/:id", updateUserDetails);
userRouter.delete("/:id", deleteUser);

export default userRouter;
