import SavedPost from "../models/savedPost.model";

const savedPostService = {
  find: async (params) => {
    return await SavedPost.find(params);
  },

  get: async (id) => {
    return await SavedPost.findById(id);
  },

  create: async (data) => {
    return await SavedPost.create(data);
  },

  update: async (id, data) => {
    return await SavedPost.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await SavedPost.findByIdAndDelete(id);
  },
};

export default savedPostService;
