import CollegeAdmin from "../models/collegeAdmin.model";


export const addCollegeAdmin = async (req, res, next) => {

  try {
    const collegeAdmin = await CollegeAdmin.create(req.body);

    return res.status(201).json(collegeAdmin);
  } catch (err) {
    return next(err);
  }
};

export const getAllCollegeAdmin = async (req, res, next) => {
    try {
      const collegeAdminList = await CollegeAdmin.find().populate("college_id").populate("user_id");
      return res.status(200).json(collegeAdminList);
    } catch (err) {
      return next(err);
    }
  };

  export const updateCollegeAdmin = async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedCollegeAdmin = await CollegeAdmin.findByIdAndUpdate(id, req.body);
      if (!updatedCollegeAdmin) {
        return res.status(404).json({ message: "College Admin not found" });
      }
      return res.status(200).json({ message: "College Admin data updated successfully" });
    } catch (err) {
      return next(err);
    }
  };
  
  
  export const deleteCollegeAdmin = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedCollegeAdmin = await CollegeAdmin.findByIdAndDelete(id);
      if (!deletedCollegeAdmin) {
        return res.status(404).json({ message: "College Admin not found" });
      }
      return res.status(200).json({ message: "College Admin deleted successfully" });
    } catch (err) {
      return next(err);
    }
  };



