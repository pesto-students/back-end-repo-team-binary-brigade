import postLikeService from "../services/postLike.service";

const postLikeController = {
  // like a post
  likePost: async (req, res, next) => {
    try {
      const likedpost = await postLikeService.find(req.body);

      if (likedpost.length === 0) {
        await postLikeService.create(req.body);
        return res.status(201).json({
          message: "Post Liked!",
        });
      } else {
        await postLikeService.remove(likedpost[0]._id);
        return res.status(201).json({
          message: "Post disliked!",
        });
      }
    } catch (error) {
      return next(error);
    }
  },

  // get all likes
  getAllLikes: async (req, res, next) => {
    try {
      const likeddatas = await postLikeService.find(req.query);
      return res.status(200).json(likeddatas);
    } catch (error) {
      return next(error);
    }
  },
};
export default postLikeController;
