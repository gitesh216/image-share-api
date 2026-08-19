// src/types/multer-s3.d.ts
declare global {
    namespace Express {
        namespace Multer {
            interface File {
                bucket: string;
                key: string;
                acl: string;
                contentType: string;
                contentDisposition: string | null;
                storageClass: string;
                serverSideEncryption: string | null;
                metadata: Record<string, string>;
                location: string;
                etag: string;
            }
        }
    }
}

export {};
