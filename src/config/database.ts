import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env.js";

export async function connectDB(): Promise<void> {
    const uri = MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
