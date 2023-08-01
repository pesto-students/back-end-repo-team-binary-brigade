import express from "express";
import uploadFile from "../controllers/uploadFile.controller";
import multer from "multer";
const upload = multer({ dest: "upload/" });

const uploadFileRouter = express.Router();

uploadFileRouter.post("/", upload.single("file"), uploadFile.uploadToS3);

export default uploadFileRouter;
