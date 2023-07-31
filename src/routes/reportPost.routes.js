import express from "express";
import validateRequiredKeys from "../middlewares/common/validateRequiredKeys";
import reportPostController from "../controllers/reportPost.controller";

const reportPostRoutes = express.Router();

reportPostRoutes.post(
  "/",
  validateRequiredKeys(["user_id", "post_id"]),
  reportPostController.reportPost
);

export default reportPostRoutes;
