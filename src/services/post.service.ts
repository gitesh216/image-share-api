import { CreatePostDTO, UpdatePostDTO } from "../dtos/post.dto.js";
import {
    createPostRepo,
    findPostById,
    findPosts,
    updatePostRepo,
    deletePost,
    findPostByUserId,
} from "../repositories/post.repository.js";
import { findUserById } from "../repositories/user.repository.js";
import { badRequest, internalServerError } from "../utils/api-error.js";

export async function getPosts(pageNumber: number, pageSize: number) {
    const itemsToSkip = (pageNumber - 1) * pageSize;
    const posts = await findPosts(itemsToSkip, pageSize);
    if (!posts) {
        throw internalServerError("Posts not found");
    }
    return posts;
}

export async function createPost(data: CreatePostDTO) {
    const userId = data.userId;
    const user = await findUserById(userId);
    if (!user) {
        throw badRequest("User not found");
    }
    const post = await createPostRepo(data);
    return post;
}

export async function updatePost(id: string, data: UpdatePostDTO) {
    const postId = id;
    const post = await findPostById(postId);
    if (!post) {
        throw badRequest("Post not found");
    }
    const updatedPost = await updatePostRepo(id, data);
    return updatedPost;
}

export async function getPostById(id: string) {
    const post = await findPostById(id);
    if (!post) {
        throw badRequest("Post not found");
    }
    return post;
}

export async function deletePostById(id: string) {
    const post = await findPostById(id);
    if (!post) {
        throw badRequest("Post not found");
    }
    const deletedPost = await deletePost(id);
    if (!deletedPost) {
        throw internalServerError("Post not deleted");
    }
    return deletedPost;
}

export async function getPostsByUserId(userId: string) {
    const user = await findUserById(userId);
    if (!user) {
        throw badRequest("User not found");
    }
    const posts = await findPostByUserId(userId);
    if (!posts) {
        throw internalServerError("Posts not found");
    }
    return posts;
}
