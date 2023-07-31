import User from "../models/user.model";

const userService = {
  find: async (query) => {
    const { skip, limit } = query;

    delete query.skip;
    delete query.limit;

    return await User.find(query)
      .select("-password -email -college_id -updatedAt -__v")
      .skip(skip)
      .limit(limit);
  },

  get: async (id, params) => {
    return await User.findById(id).select("-password");
  },

  create: async (data) => {
    return await User.create(data).select("-password");
  },

  update: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true }).select(
      "-password"
    );
  },

  remove: async (id) => {
    return await User.findByIdAndDelete(id).select("-password");
  },
};

export default userService;
