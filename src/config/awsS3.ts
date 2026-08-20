import { S3Client } from "@aws-sdk/client-s3";
import {
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    AWS_REGION_KEY,
} from "../config/env.js";

const s3 = new S3Client({
    region: AWS_REGION_KEY,

    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
    },
});

export default s3;
