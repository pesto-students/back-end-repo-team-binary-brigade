import College from "../models/college.model";


export const addCollege = async (req, res, next) => {

  try {
    const college = await College.create(req.body);

    return res.status(201).json(college);
  } catch (err) {
    return next(err);
  }
};


export const getAllCollege = async (req, res, next) => {
  try {
    const collegeList = await College.find();
    return res.status(200).json(collegeList);
  } catch (err) {
    return next(err);
  }
};


export const updateCollegeDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCollege = await College.findByIdAndUpdate(id, req.body);
    if (!updatedCollege) {
      return res.status(404).json({ message: "College not found" });
    }
    return res.status(200).json({ message: "College data updated successfully" });
  } catch (err) {
    return next(err);
  }
};


export const deleteCollege = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCollege = await College.findByIdAndDelete(id);
    if (!deletedCollege) {
      return res.status(404).json({ message: "College not found" });
    }
    return res.status(200).json({ message: "College deleted successfully" });
  } catch (err) {
    return next(err);
  }
};


