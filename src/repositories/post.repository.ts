import { CreatePostDTO, UpdatePostDTO } from "../dtos/post.dto.js";
import { Post } from "../schema/post.schema.js";

export async function createPostRepo(data: CreatePostDTO) {
    const post = await Post.create(data);
    return post;
}

export async function updatePostRepo(id: string, data: UpdatePostDTO) {
    const post = await Post.findOneAndUpdate({ _id: id }, data, { new: true });
    return post;
}

export async function deletePost(id: string) {
    const post = await Post.findByIdAndDelete(id);
    return post;
}

export async function findPosts(itemsToSkip: number, pageSize: number) {
    const pagePosts = await Post.find({})
        .sort({ createdAt: -1 })
        .skip(itemsToSkip)
        .limit(pageSize);
    return pagePosts;
}

export async function findPostById(id: string) {
    const post = await Post.findById(id);
    return post;
}

export async function findPostByUserId(userId: string) {
    const posts = await Post.find({ userId });
    return posts;
}
