import { CreateCommentDTO } from "../dtos/comment.dto.js";
import { Comment } from "../schema/comment.schema.js";

export async function createCommentRepo(data: CreateCommentDTO) {
    const comment = await Comment.create(data);
    return comment;
}

export async function fetchCommentWithReplies(commentId: string) {
    const comments = await Comment.findById(commentId).populate("replies");
    return comments;
}

export async function deleteComment(commentId: string) {
    const comment = await Comment.findByIdAndDelete(commentId);
    return comment;
}

export async function findCommentById(commentId: string) {
    const comment = await Comment.findById(commentId);
    return comment;
}