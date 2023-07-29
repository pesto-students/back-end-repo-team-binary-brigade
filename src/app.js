import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import connectDB from "../config/database";
// import middlewares
import checkUserAuthentication from "./middlewares/common/checkUserAuthentication";

// import routers
import userRouter from "./routes/user.routes";
import authenticationRouter from "./authenticate";
import setupSocket from "../config/socket";

dotenv.config();
const app = express();
const server = createServer(app);
setupSocket(server);

// middlewares
app.use(express.json());
app.use(checkUserAuthentication);
// base routers
app.use("/user", userRouter);
app.use("/authentication", authenticationRouter);
// Connect to the database
connectDB();

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
