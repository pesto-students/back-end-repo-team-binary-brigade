import ReportPost from "../models/reportPost.model";

const reportPostService = {
  find: async (params) => {
    return await ReportPost.find();
  },

  get: async (id, params) => {
    return await ReportPost.findById(id);
  },

  create: async (data) => {
    return await ReportPost.create(data);
  },

  update: async (id, data) => {
    return await ReportPost.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await ReportPost.findByIdAndDelete(id);
  },
};

export default reportPostService;
