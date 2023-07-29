import Post from "../models/post.model";


export const addPost = async (req, res, next) => {

  try {
    const post = await Post.create(req.body);

    return res.status(201).json(post);
  } catch (err) {
    return next(err);
  }
};


export const getAllPost = async (req, res, next) => {
  try {
    const postList = await Post.find().populate("college_id").populate("user_id");
    return res.status(200).json(postList);
  } catch (err) {
    return next(err);
  }
};


export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post data updated successfully" });
  } catch (err) {
    return next(err);
  }
};


export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletePost = await Post.findByIdAndDelete(id);
    if (!deletePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return next(err);
  }
};


