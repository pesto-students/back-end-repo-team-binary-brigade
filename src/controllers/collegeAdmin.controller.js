import collegeAdminService from "../services/collegeAdmin.service";

const collegeAdminController = {
  // get all data list
  getDataList: async (req, res, next) => {
    try {
      const colleges = await collegeAdminService.find();
      return res.status(200).json(colleges);
    } catch (error) {
      return next(error);
    }
  },

  // get data details by id
  getDataById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const college = await collegeAdminService.get(id);
      if (!college) {
        return res.status(404).json({ error: "College Admin not found" });
      }
      return res.status(200).json(college);
    } catch (error) {
      return next(error);
    }
  },

  // create data
  createData: async (req, res, next) => {
    try {
      const collegeAdmin = await collegeAdminService.create(req.body);
      return res.status(201).json(collegeAdmin);
    } catch (error) {
      return next(error);
    }
  },

  // update data details
  updateData: async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedCollegeAdminData = await collegeAdminService.update(
        id,
        req.body
      );
      return res.status(200).json(updatedCollegeAdminData);
    } catch (error) {
      return next(error);
    }
  },

  // delete data
  deleteData: async (req, res, next) => {
    const { id } = req.params;
    try {
      await collegeAdminService.remove(id);
      return res
        .status(200)
        .json({ message: "College Admin deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },
};

export default collegeAdminController;
