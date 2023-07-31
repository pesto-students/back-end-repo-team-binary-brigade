import PostComment from "../models/postComment.model";

const postCommentService = {
  find: async (query) => {
    const { skip, limit } = query;

    delete query.skip;
    delete query.limit;

    return await PostComment.find(query)
      .select("-post_id -updatedAt -__v")
      .populate("user_id", "name avatar avatar_bg_color")
      .skip(skip)
      .limit(limit);
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
