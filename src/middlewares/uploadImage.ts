import multer, { FileFilterCallback } from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import {
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    AWS_REGION_KEY,
    AWS_BUCKET_NAME,
} from "../config/env.js";
import path from "path";

// create s3 instance using S3Client
const s3 = new S3Client({
    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
    },
    region: AWS_REGION_KEY,
});

const s3Storage = multerS3({
    s3: s3,
    bucket: AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: (_req, file, cb) => {
        cb(null, { fieldname: file.fieldname });
    },
    key: (_req, file, cb) => {
        const fileName =
            Date.now() + "_" + file.fieldname + "_" + file.originalname;
        cb(null, fileName);
    },
});

// function to sanitize files and send error for unsupported files
function sanitizeFile(file: Express.Multer.File, cb: FileFilterCallback) {
    const fileExts = [".png", ".jpg", ".jpeg"];

    const isAllowedExt = fileExts.includes(
        path.extname(file.originalname.toLowerCase()),
    );

    // Mime type must be an image
    const isAllowedMimeType = file.mimetype.startsWith("image/");

    if (isAllowedExt && isAllowedMimeType) {
        return cb(null, true); // no errors
    } else {
        cb(new Error("Error: File type not allowed!"));
    }
}

const uploadImage = multer({
    storage: s3Storage,
    fileFilter: (_req, file, callback) => {
        sanitizeFile(file, callback);
    },
    limits: {
        fileSize: 1024 * 1024 * 2, // 2mb file size
    },
});

export default uploadImage;
