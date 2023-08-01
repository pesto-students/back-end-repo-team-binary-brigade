import { uploadFile } from "../utils/tools/S3Uploader";
import fs from "fs";
import util from "util";
const unlinkFile = util.promisify(fs.unlink);

const uploadFileController = {
  uploadToS3: async (req, res, next) => {
    const file = req.file;

    // store file in S3
    try {
      const result = await uploadFile(file);
      res.send({ imagePath: result.Location });
    } catch (error) {
      next(error);
    }

    // delete the file from public/uploads folder
    await unlinkFile(file.path);
  },
};
export default uploadFileController;
