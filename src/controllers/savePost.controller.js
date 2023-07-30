import savedPostService from "../services/savedPost.service";

const savedPostController = {
  // saved a post
  savedPost: async (req, res, next) => {
    try {
      await savedPostService.create(req.body);
      return res.status(201).json({
        message: "Post Saved!",
      });
    } catch (error) {
      return next(error);
    }
  },

  // get all saved post
  getAllSavedPost: async (req, res, next) => {
    const { user_id } = req.query;
    if (user_id) {
      try {
        const savedPosts = await savedPostService.find({ user_id });
        return res.status(200).json(savedPosts);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).json({ message: `User id is missing in query!` });
  },

  // remove saved post
  removeSavedPost: async (req, res, next) => {
    const { id } = req.params;
    try {
      await savedPostService.remove(id);
      return res.status(200).json({ message: "Post Removed!" });
    } catch (error) {
      return next(error);
    }
  },
};
export default savedPostController;
