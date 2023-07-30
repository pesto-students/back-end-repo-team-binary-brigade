import User from "../models/user.model";

const userService = {
  find: async (params) => {
    return await User.find();
  },

  get: async (id, params) => {
    return await User.findById(id);
  },

  create: async (data) => {
    return await User.create(data);
  },

  update: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await User.findByIdAndDelete(id);
  },
};

export default userService;
