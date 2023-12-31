import express from "express";
import { createServer } from "http";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/database";
import setupSocket from "../config/socket";

// import middlewares
import checkUserAuthentication from "./middlewares/common/checkUserAuthentication";
import handleErrorResponse from "./middlewares/common/handleErrorResponse";

// import routers
import userRouter from "./routes/user.routes";
import authenticationRouter from "./authenticate";
import collegeRouter from "./routes/college.routes";
import postRoutes from "./routes/post.routes";
import savePostRoutes from "./routes/savedPost.routes";
import reportPostRoutes from "./routes/reportPost.routes";
import postLikeRoutes from "./routes/postLike.routes";
import postCommentRoutes from "./routes/postComment.routes";
import uploadFileRouter from "./routes/uploadFile.routers";
// import collegeAdminRouter from "./routes/collegeAdmin.routes";

dotenv.config();
const app = express();
const server = createServer(app);
setupSocket(server);

// Allow requests from specific origins
const allowedOrigins = ["http://localhost:3000"]; // Replace with your frontend's URL
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
// middlewares
app.use(express.json());
// Set up session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(checkUserAuthentication);

// base routers
app.use("/user", userRouter);
app.use("/authentication", authenticationRouter);
app.use("/college", collegeRouter);
app.use("/post", postRoutes);
app.use("/saved-post", savePostRoutes);
app.use("/report-post", reportPostRoutes);
app.use("/post-like", postLikeRoutes);
app.use("/post-comment", postCommentRoutes);
app.use("/upload", uploadFileRouter);
// app.use("/college-admin", collegeAdminRouter);
app.use(handleErrorResponse);

// Connect to the database
connectDB();

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
