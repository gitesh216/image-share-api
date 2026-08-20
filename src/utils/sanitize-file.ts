import { FileFilterCallback } from "multer";
import path from "path";

const ALLOWED_IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

export function sanitizeImageFile(
    file: Express.Multer.File,
    cb: FileFilterCallback,
) {
    const extension = path.extname(file.originalname.toLowerCase());

    const isAllowedExtension = ALLOWED_IMAGE_EXTENSIONS.includes(extension);

    const isAllowedMimeType = file.mimetype.startsWith("image/");

    if (isAllowedExtension && isAllowedMimeType) {
        return cb(null, true);
    }

    cb(new Error("Only PNG, JPG, and JPEG files are allowed."));
}
