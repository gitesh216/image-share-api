import { Router } from "express";
import { addComment, getCommentsWithReplies } from "../controllers/comment.controller.js";

const commentRouter: Router = Router();

commentRouter.post("/", addComment);
commentRouter.post("/:commentId", getCommentsWithReplies);

export default commentRouter;