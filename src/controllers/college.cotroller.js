import collegeService from "../services/college.service";

const collegeController = {
  // get all data list
  getAllCollegeList: async (req, res, next) => {
    try {
      let colleges = [];
      if (req.query.searchKey) {
        const regexQuery = {
          name: { $regex: new RegExp(req.query.searchKey, "i") },
        };
        colleges = await collegeService.find(regexQuery);
      } else {
        colleges = await collegeService.find(req.query);
      }
      return res.status(200).json(colleges);
    } catch (error) {
      return next(error);
    }
  },

  // get details by id
  getCollegeDetails: async (req, res, next) => {
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
  addCollege: async (req, res, next) => {
    try {
      const college = await collegeService.create(req.body);
      return res.status(201).json(college);
    } catch (error) {
      return next(error);
    }
  },

  // update data details
  updateCollegeDetails: async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedCollegeData = await collegeService.update(id, req.body);
      return res.status(200).json(updatedCollegeData);
    } catch (error) {
      return next(error);
    }
  },

  // delete data
  deleteCollege: async (req, res, next) => {
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
