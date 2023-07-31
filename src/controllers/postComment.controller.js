import postCommentService from "../services/postComment.service";

const postCommentController = {
  // comment on a post
  commentPost: async (req, res, next) => {
    try {
      await postCommentService.create(req.body);
      return res.status(201).json({
        message: "Comment Saved!",
      });
    } catch (error) {
      return next(error);
    }
  },

  // get comments
  getComments: async (req, res, next) => {
    try {
      const comments = await postCommentService.find(req.query);
      return res.status(200).json(comments);
    } catch (error) {
      return next(error);
    }
  },
};
export default postCommentController;
