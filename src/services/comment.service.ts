import { CreateCommentDTO } from "../dtos/comment.dto.js";
import {
    createCommentRepo,
    fetchCommentWithReplies,
    findCommentById,
} from "../repositories/comment.repository.js";
import { findPostById } from "../repositories/post.repository.js";
import { findUserById } from "../repositories/user.repository.js";
import { badRequest, internalServerError } from "../utils/api-error.js";

export async function createComment(data: CreateCommentDTO) {
    const userId = data.userId;
    const user = await findUserById(userId);
    if (!user || user === null) {
        throw badRequest("User not found");
    }

    const targetExists = await findPostById(data.commentableId);
    if (!targetExists || targetExists === null) {
        throw badRequest("Commentable not found");
    }

    const comment = await createCommentRepo(data);
    if (!comment) {
        throw internalServerError("Comment not created");
    }
    return comment;
}

export async function getCommentswithReplies(commentId: string) {
    const comment = await findCommentById(commentId);
    if (!comment) {
        throw badRequest("Comment not found");
    }
    const comments = await fetchCommentWithReplies(commentId);
    if (!comments) {
        throw internalServerError("Comments not fetched from the server");
    }
    return comments;
}
