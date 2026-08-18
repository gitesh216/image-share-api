import { Router } from "express";
import { addComment, getCommentsWithReplies } from "../controllers/comment.controller.js";

const commentRouter: Router = Router();

commentRouter.post("/", addComment);
commentRouter.get("/:commentId", getCommentsWithReplies);

export default commentRouter;