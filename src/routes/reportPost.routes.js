import express from "express";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import reportPostController from "../controllers/reportPost.controller";

const savePostRoutes = express.Router();

savePostRoutes.post(
  "/",
  validateRequiredKeys(["user_id", "post_id"]),
  reportPostController.reportPost
);

export default savePostRoutes;
