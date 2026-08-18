import { Router } from "express";
import {
    createPost,
    getAllPagePosts,
    removePost,
    updatePost,
} from "../controllers/post.controller.js";
import { validate } from "../middlewares/validate.js";
import { updatePostSchema, postSchema } from "../dtos/post.dto.js";

const postRouter: Router = Router();

postRouter.get("/:pageNumber/:pageSize", getAllPagePosts);
postRouter.delete("/:postId", removePost);
postRouter.put("/:postId", validate(updatePostSchema), updatePost);
postRouter.post("/", validate(postSchema), createPost);

export default postRouter;     