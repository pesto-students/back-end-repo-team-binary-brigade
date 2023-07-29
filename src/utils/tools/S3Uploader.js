import fs from "fs";
import dotenv from "dotenv";
import S3 from "aws-sdk/clients/s3";
dotenv.config();

// s3 configuration
const s3 = new S3({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

// uploads a file to s3
export const S3Uploader = (localpath, hostedpath) => {
  const fileStream = fs.createReadStream(localpath);
  const uploadParams = {
    Bucket: process.env.BUCKET_NAME,
    Body: fileStream,
    Key: hostedpath,
  };

  return s3.upload(uploadParams).promise();
};
