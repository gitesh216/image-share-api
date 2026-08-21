import express, { Express } from "express";
import os from "os";
import userRouter from "./routers/user.router.js";
import postRouter from "./routers/post.router.js";
import commentRouter from "./routers/comment.router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import limiter from "./middlewares/rate-limiter.js";

import { setupSwagger } from "./config/swagger.config.js";

const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
// Setup Swagger Docs
setupSwagger(app);
app.use(limiter);

app.get("/ping", (_req, res) => {
    res.json({
        status: "pong",
        instance: process.env.HOSTNAME ?? os.hostname(),
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);


app.use(errorHandler);
export default app;
