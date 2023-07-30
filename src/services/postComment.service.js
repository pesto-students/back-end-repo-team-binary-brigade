import PostComment from "../models/postComment.model";

const postCommentService = {
  find: async (params) => {
    return await PostComment.find();
  },

  get: async (id, params) => {
    return await PostComment.findById(id);
  },

  create: async (data) => {
    return await PostComment.create(data);
  },

  update: async (id, data) => {
    return await PostComment.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await PostComment.findByIdAndDelete(id);
  },
};

export default postCommentService;
