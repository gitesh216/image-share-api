import { Router } from "express";
import { addComment, getCommentsWithReplies } from "../controllers/comment.controller.js";

const commentRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management API
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - userId
 *               - onModel
 *               - commentableId
 *             properties:
 *               content:
 *                 type: string
 *               userId:
 *                 type: string
 *               onModel:
 *                 type: string
 *                 enum: [Post, Comment]
 *               commentableId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Invalid input
 */
commentRouter.post("/", addComment);

/**
 * @swagger
 * /comments/{commentId}:
 *   get:
 *     summary: Get comments with replies by comment ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comments and their replies
 *       404:
 *         description: Comment not found
 */
commentRouter.get("/:commentId", getCommentsWithReplies);

export default commentRouter;