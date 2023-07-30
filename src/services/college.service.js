import College from "../models/college.model";

const collegeService = {
  find: async (params) => {
    return await College.find();
  },

  get: async (id, params) => {
    return await College.findById(id);
  },

  create: async (data) => {
    return await College.create(data);
  },

  update: async (id, data) => {
    return await College.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await College.findByIdAndDelete(id);
  },
};

export default collegeService;
