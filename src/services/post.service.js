import Post from "../models/post.model";

const postService = {
  find: async (params) => {
    return await Post.find();
  },

  get: async (id, params) => {
    return await Post.findById(id);
  },

  create: async (data) => {
    return await Post.create(data);
  },

  update: async (id, data) => {
    return await Post.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await Post.findByIdAndDelete(id);
  },
};

export default postService;
