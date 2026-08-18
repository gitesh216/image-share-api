import { z } from "zod";
import { nativeObjectIdSchema } from './post.dto.js';

export const commentSchema = z.object({
    content: z.string().min(1).trim(),
    userId: nativeObjectIdSchema,
    onModel: z.enum(["Post", "Comment"]),
    commentableId: nativeObjectIdSchema,
});

export type CreateCommentDTO = z.infer<typeof commentSchema>;
