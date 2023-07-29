import mongoose from "mongoose";
const Schema = mongoose.Schema;

const collegeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    number_of_student: {
      type: Number,
      required: true,
    },
    number_of_faculty: {
      type: Number,
      required: true,
    },
    number_of_streams: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
    },
    //Status of the User
    //1. Active
    //0. Inactive
    //-1. Deleted
    status: {
      type: Number,
      enum: [1, 0, -1],
      default: 1,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const College = mongoose.model("College", collegeSchema);
export default College;
