import express from "express";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import postCommentController from "../controllers/postComment.controller";

const postCommentRoutes = express.Router();

postCommentRoutes.post(
  "/",
  validateRequiredKeys(["user_id", "post_id", "comment"]),
  postCommentController.commentPost
);

postCommentRoutes.get("/", postCommentController.getComments);

export default postCommentRoutes;
