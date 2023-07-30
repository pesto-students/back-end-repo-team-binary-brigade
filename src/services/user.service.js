import User from "../models/user.model";

const userService = {
  find: async (params) => {
    return await User.find().select("-password");
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
