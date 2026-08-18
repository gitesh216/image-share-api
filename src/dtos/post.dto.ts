import { z } from "zod";
import { ObjectId } from "mongodb";

export const nativeObjectIdSchema = z
  .string()
  .refine((val) => ObjectId.isValid(val), {
    message: "Invalid MongoDB ObjectId format",
  });

export const postSchema = z.object({
    caption: z.string().min(5).trim(),
    image: z.string().trim().url(),
    userId: nativeObjectIdSchema,
});

export const updatePostSchema = z.object({
    caption: z.string().min(5).trim().optional(),
    image: z.string().trim().url().optional(),
});

export type UpdatePostDTO = z.infer<typeof updatePostSchema>;

export type CreatePostDTO = z.infer<typeof postSchema>;