import { Request, Response } from "express";
import {
    createPost as createPostService,
    getPosts as getAllPostsService,
    deletePostById as deletePostByIdService,
    updatePost as updatePostService,
    getPostsByUserId as getPostsByUserIdService,
} from "../services/post.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function createPost(req: Request, res: Response) {
    const post = await createPostService(req.body);
    sendSuccess(res, post);
}

export async function getAllPagePosts(req: Request, res: Response) {
    const { pageNumber, pageSize } = req.params;
    const posts = await getAllPostsService(
        Number(pageNumber),
        Number(pageSize),
    );
    sendSuccess(res, posts);
}

export async function removePost(req: Request, res: Response) {
    const postId = req.params.postId as string;
    const post = await deletePostByIdService(postId);
    sendSuccess(res, post);
}

export async function updatePost(req: Request, res: Response) {
    const postId = req.params.postId as string;
    const post = await updatePostService(postId, req.body);
    sendSuccess(res, post);
}

export async function getPostByUserId(req: Request, res: Response) {
    const userId = req.params.userId as string;
    const post = await getPostsByUserIdService(userId);
    sendSuccess(res, post);
}
