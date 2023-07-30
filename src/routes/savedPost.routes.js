import express from "express";
import savedPostController from "../controllers/savePost.controller";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";

const savePostRoutes = express.Router();

savePostRoutes.post(
  "/",
  validateRequiredKeys(["user_id", "post_id"]),
  savedPostController.savedPost
);
savePostRoutes.get("/", savedPostController.getAllSavedPost);
savePostRoutes.delete("/:id", savedPostController.removeSavedPost);

export default savePostRoutes;
