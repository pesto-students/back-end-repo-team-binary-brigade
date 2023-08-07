import College from "../models/college.model";

const collegeService = {
  find: async (query) => {
    const { skip, limit } = query;

    delete query.skip;
    delete query.limit;

    return await College.find(query)
      .select("-updatedAt -__v")
      .skip(skip)
      .limit(limit);
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
