import SavedPost from "../models/savedPost.model";


export const addSavePost = async (req, res, next) => {

  try {
    const savePost = await SavedPost.create(req.body);

    return res.status(201).json(savePost);
  } catch (err) {
    return next(err);
  }
};


export const getAllSavePost = async (req, res, next) => {
  try {
    const savePostList = await SavedPost.find().populate("post_id").populate("user_id");
    return res.status(200).json(savePostList);
  } catch (err) {
    return next(err);
  }
};


export const updateSavePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateSavePost = await SavedPost.findByIdAndUpdate(id, req.body);
    if (!updateSavePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post data updated successfully" });
  } catch (err) {
    return next(err);
  }
};


export const deleteSavePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteSavePost = await SavedPost.findByIdAndDelete(id);
    if (!deleteSavePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return next(err);
  }
};


