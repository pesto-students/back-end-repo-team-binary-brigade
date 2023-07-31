import postService from "../services/post.service";
import reportPostService from "../services/reportPost.service";

const reportPostController = {
  // report a post
  reportPost: async (req, res, next) => {
    const { post_id } = req.body;
    try {
      const reports = await reportPostService.find(req.body);
      if (reports.length < 3) {
        await reportPostService.create(req.body);
      } else {
        await postService.remove(post_id);
      }

      return res.status(201).json({
        message: "Post Reported!",
      });
    } catch (error) {
      return next(error);
    }
  },
};
export default reportPostController;
