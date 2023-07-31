import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postLikeSchema = new Schema(
  {
    post_id: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const PostLike = mongoose.model("PostLike", postLikeSchema);
export default PostLike;
