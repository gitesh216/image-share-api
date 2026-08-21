import { Router } from "express";
import {
    createPost,
    getAllPagePosts,
    removePost,
    updatePost,
} from "../controllers/post.controller.js";
import { validate } from "../middlewares/validate.js";
import { updatePostSchema, postSchema } from "../dtos/post.dto.js";
import uploadImage from '../middlewares/uploadImage.js';
import { addImageString } from "../middlewares/addImageString.js";

const postRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management API
 */

/**
 * @swagger
 * /posts/{pageNumber}/{pageSize}:
 *   get:
 *     summary: Get all posts with pagination
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: pageNumber
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: pageSize
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of posts
 */
postRouter.get("/:pageNumber/:pageSize", getAllPagePosts);

/**
 * @swagger
 * /posts/{postId}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 */
postRouter.delete("/:postId", removePost);

/**
 * @swagger
 * /posts/{postId}:
 *   put:
 *     summary: Update a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               caption:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Post not found
 */
postRouter.put("/:postId", uploadImage.single("image"), validate(updatePostSchema), updatePost);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - caption
 *               - userId
 *               - image
 *             properties:
 *               caption:
 *                 type: string
 *               userId:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Invalid input
 */
postRouter.post("/", uploadImage.single("image"), addImageString, validate(postSchema), createPost);

export default postRouter;