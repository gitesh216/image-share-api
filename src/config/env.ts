import "dotenv/config";

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const MONGODB_URI = process.env.MONGODB_URI || "";
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || "";
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY || "";
export const AWS_REGION_KEY = process.env.AWS_REGION_KEY || "";
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || "";