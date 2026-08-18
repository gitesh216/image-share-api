import express, { Express } from "express";
import os from "os";
import userRouter from "./routers/user.router.js";
import postRouter from "./routers/post.router.js";

const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (_req, res) => {
    res.json({
        status: "pong",
        instance: process.env.HOSTNAME ?? os.hostname(),
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
