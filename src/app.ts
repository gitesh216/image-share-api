import express, { Express } from "express";
import os from "os";

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

export default app;
