import { Request, Response } from "express";
import {
    createComment,
    getCommentswithReplies as getCommentswithRepliesService,
} from "../services/comment.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function addComment(req: Request, res: Response) {
    const data = req.body;
    const comment = await createComment(data);
    sendSuccess(res, comment, 201, "Comment added successfully");
}

export async function getCommentsWithReplies(req: Request, res: Response) {
    const commentId = req.params.commentId as string;
    const comments = await getCommentswithRepliesService(commentId);
    sendSuccess(res, comments, 200, "Comments retrieved successfully");
}
