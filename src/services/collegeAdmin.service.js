import CollegeAdmin from "../models/collegeAdmin.model";

const collegeAdminService = {
  find: async (params) => {
    return await CollegeAdmin.find();
  },

  get: async (id, params) => {
    return await CollegeAdmin.findById(id);
  },

  create: async (data) => {
    return await CollegeAdmin.create(data);
  },

  update: async (id, data) => {
    return await CollegeAdmin.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await CollegeAdmin.findByIdAndDelete(id);
  },
};

export default collegeAdminService;
