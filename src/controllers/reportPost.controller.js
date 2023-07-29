import ReportPost from "../models/reportPost.model";


export const addPostReport = async (req, res, next) => {

  try {
    const reportPost = await ReportPost.create(req.body);

    return res.status(201).json(reportPost);
  } catch (err) {
    return next(err);
  }
};


export const getAllReportPost = async (req, res, next) => {
  try {
    const getAllReportPost = await ReportPost.find().populate("post_id").populate("user_id");
    return res.status(200).json(getAllReportPost);
  } catch (err) {
    return next(err);
  }
};


export const updateSavePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateReportPost = await ReportPost.findByIdAndUpdate(id, req.body);
    if (!updateReportPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post data updated successfully" });
  } catch (err) {
    return next(err);
  }
};


export const deleteReportPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteReportPost = await ReportPost.findByIdAndDelete(id);
    if (!deleteReportPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return next(err);
  }
};


