import express from "express";
import postController from "../controllers/post.controller";

const postRoutes = express.Router();

postRoutes.post("/", postController.createPost);
postRoutes.get("/", postController.getAllPost);
postRoutes.get("/:id", postController.getPostDetails);
postRoutes.put("/:id", postController.updatePost);
postRoutes.delete("/:id", postController.deletePost);

export default postRoutes;
