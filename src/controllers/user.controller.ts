import { Request, Response } from "express";
import { sendSuccess } from "../utils/api-response.js";
import {
    getAllUsers as getAllUsersService,
    getUserById as getUserByIdService,
    userSignup as userSignupService,
} from "../services/user.service.js";

export async function getAllUsers(_req: Request, res: Response) {
    const users = await getAllUsersService();
    sendSuccess(res, users);
}

export async function getUserById(req: Request, res: Response) {
    const userId = req.params.userId as string;
    const user = await getUserByIdService(userId);
    sendSuccess(res, user);
}

export async function createUser(req: Request, res: Response) {
    const user = await userSignupService(req.body);
    sendSuccess(res, user);
}
