import multer from "multer";
import multerS3 from "multer-s3";

import s3 from "../config/awsS3.js";
import { AWS_BUCKET_NAME } from "../config/env.js";
import { sanitizeImageFile } from "../utils/sanitize-file.js";

const s3Storage = multerS3({
    s3,
    bucket: AWS_BUCKET_NAME,
    acl: "public-read",

    metadata: (_req, file, cb) => {
        cb(null, {
            fieldname: file.fieldname,
        });
    },

    key: (_req, file, cb) => {
        const fileName = `${Date.now()}_${file.fieldname}_${file.originalname}`;

        cb(null, fileName);
    },
});

const uploadImage = multer({
    storage: s3Storage,

    fileFilter: (_req, file, cb) => {
        sanitizeImageFile(file, cb);
    },

    limits: {
        fileSize: 2 * 1024 * 1024,
    },
});

export default uploadImage;
