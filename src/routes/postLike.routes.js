import express from "express";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import postLikeController from "../controllers/postLike.controller";

const postLikeRoutes = express.Router();

postLikeRoutes.post(
  "/",
  validateRequiredKeys(["user_id", "post_id"]),
  postLikeController.likePost
);

postLikeRoutes.get("/", postLikeController.getAllLikes);

export default postLikeRoutes;
