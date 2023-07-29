import express from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../controllers/post.controller";

const postRoutes = express.Router();

postRoutes.post( "/", addPost);

postRoutes.get("/", getAllPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);

export default postRoutes;
