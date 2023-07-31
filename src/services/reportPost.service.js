import ReportPost from "../models/reportPost.model";

const reportPostService = {
  find: async (query) => {
    return await ReportPost.find(query);
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
