import collegeService from "../services/college.service";

const collegeController = {
  // get all data list
  getDataList: async (req, res, next) => {
    try {
      const colleges = await collegeService.find();
      return res.status(200).json(colleges);
    } catch (error) {
      return next(error);
    }
  },

  // get data details by id
  getDataById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const college = await collegeService.get(id);
      if (!college) {
        return res.status(404).json({ error: "College not found" });
      }
      return res.status(200).json(college);
    } catch (error) {
      return next(error);
    }
  },

  // create data
  createData: async (req, res, next) => {
    try {
      const college = await collegeService.create(req.body);
      return res.status(201).json(college);
    } catch (error) {
      return next(error);
    }
  },

  // update data details
  updateData: async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedCollegeData = await collegeService.update(id, req.body);
      return res.status(200).json(updatedCollegeData);
    } catch (error) {
      return next(error);
    }
  },

  // delete data
  deleteData: async (req, res, next) => {
    const { id } = req.params;
    try {
      await collegeService.remove(id);
      return res.status(200).json({ message: "College deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },
};

export default collegeController;
