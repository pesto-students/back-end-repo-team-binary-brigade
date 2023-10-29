import SavedPost from "../models/savedPost.model";

const savedPostService = {
  find: async (query) => {
    const { skip, limit } = query;

    delete query.skip;
    delete query.limit;
    return await SavedPost.find(query)
      .select("-post_id -updatedAt -__v")
      .populate("user_id", "name avatar avatar_bg_color")
      .populate("post_id", "image caption")
      .skip(skip)
      .limit(limit);
  },

  get: async (id) => {
    return await SavedPost.findById(id);
  },

  create: async (data) => {
    const newSavedPost = new SavedPost(data);
    const savedPost = await newSavedPost.save();
    return savedPost;
  },

  update: async (id, data) => {
    return await SavedPost.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await SavedPost.findByIdAndDelete(id);
  },
};

export default savedPostService;
