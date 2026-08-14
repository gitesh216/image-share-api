import express, { Express}  from "express";

const app: Express  = express();

app.get("/", (_req, res) => {
    res.send("Hello from the server!");
});

export default app;
