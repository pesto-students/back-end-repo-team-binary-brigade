import mongoose from "mongoose";
const Schema = mongoose.Schema;

const collegeAdminSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    college_id: {
      type: Schema.Types.ObjectId,
      ref:"College",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const CollegeAdmin = mongoose.model("CollegeAdmin", collegeAdminSchema);
export default CollegeAdmin;
