import { Router } from "express";   
import { getAllUsers, getUserById, createUser } from "../controllers/user.controller.js";
import userSchema from "../dtos/user.dto.js";
import { validate } from "../middlewares/validate.js";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/profile/:userId", getUserById);
userRouter.post("/singup", validate(userSchema), createUser);

export default userRouter;
