import postService from "../services/post.service";

const postController = {
  // get all post
  getAllPost: async (req, res, next) => {
    try {
      const posts = await postService.find();
      return res.status(200).json(posts);
    } catch (error) {
      return next(error);
    }
  },

  // get post details by id
  getPostDetails: async (req, res, next) => {
    const { id } = req.params;
    try {
      const post = await postService.get(id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      return res.status(200).json(post);
    } catch (error) {
      return next(error);
    }
  },

  // create post
  createPost: async (req, res, next) => {
    try {
      const college = await postService.create(req.body);
      return res.status(201).json(college);
    } catch (error) {
      return next(error);
    }
  },

  // update post
  updatePost: async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedPost = await postService.update(id, req.body);
      return res.status(200).json(updatedPost);
    } catch (error) {
      return next(error);
    }
  },

  // delete data
  deletePost: async (req, res, next) => {
    const { id } = req.params;
    try {
      await postService.remove(id);
      return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },
};
export default postController;
