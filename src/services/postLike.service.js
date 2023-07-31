import PostLike from "../models/postLike.model";

const postLikeService = {
  find: async (query) => {
    const { skip, limit } = query;

    delete query.skip;
    delete query.limit;

    return await PostLike.find(query)
      .select("-post_id -updatedAt -__v")
      .populate("user_id", "name avatar avatar_bg_color")
      .skip(skip)
      .limit(limit);
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
