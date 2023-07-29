import express from "express";
import {
  addCollege,
  deleteCollege,
  getAllCollege,
  updateCollegeDetails,
} from "../controllers/college.cotroller";

const collegeRouter = express.Router();

collegeRouter.post( "/", addCollege);

collegeRouter.get("/", getAllCollege);
collegeRouter.put("/:id", updateCollegeDetails);
collegeRouter.delete("/:id", deleteCollege);

export default collegeRouter;
