import PostLike from "../models/postLike.model";

const postLikeService = {
  find: async (params) => {
    return await PostLike.find();
  },

  get: async (id, params) => {
    return await PostLike.findById(id);
  },

  create: async (data) => {
    return await PostLike.create(data);
  },

  update: async (id, data) => {
    return await PostLike.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await PostLike.findByIdAndDelete(id);
  },
};

export default postLikeService;
