import express from "express";
import collegeController from "../controllers/college.cotroller";

const collegeRouter = express.Router();

collegeRouter.post("/", collegeController.addCollege);
collegeRouter.get("/", collegeController.getAllCollegeList);
collegeRouter.get("/:id", collegeController.getCollegeDetails);
collegeRouter.put("/:id", collegeController.updateCollegeDetails);
collegeRouter.delete("/:id", collegeController.deleteCollege);

export default collegeRouter;
