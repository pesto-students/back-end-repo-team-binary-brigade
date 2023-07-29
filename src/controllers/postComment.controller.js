import PostComment from "../models/postComment.model";


export const addPostComment= async (req, res, next) => {

  try {
    const postComment = await PostComment.create(req.body);

    return res.status(201).json(postComment);
  } catch (err) {
    return next(err);
  }
};

export const getAllpostComment = async (req, res, next) => {
    try {
      const postCommentList = await PostComment.find().populate("post_id").populate("user_id");
      return res.status(200).json(postCommentList);
    } catch (err) {
      return next(err);
    }
  };

  export const updateComment = async (req, res, next) => {
    const { id } = req.params;
    try {
      const updateComment = await PostComment.findByIdAndUpdate(id, req.body);
      if (!updateComment) {
        return res.status(404).json({ message: "Comment  not found" });
      }
      return res.status(200).json({ message: "Comment  updated successfully" });
    } catch (err) {
      return next(err);
    }
  };
  
  
  export const deleteComment = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedComment = await PostComment.findByIdAndDelete(id);
      if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
      return next(err);
    }
  };



