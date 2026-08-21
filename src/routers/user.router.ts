import { Router } from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/user.controller.js";
import userSchema from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

const userRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 */
userRouter.get("/", getAllUsers);

/**
 * @swagger
 * /users/profile/{userId}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User profile details
 *       404:
 *         description: User not found
 */
userRouter.get("/profile/:userId", getUserById);

/**
 * @swagger
 * /users/singup:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
userRouter.post("/singup", validate(userSchema), createUser);

export default userRouter;
