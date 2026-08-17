import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
            default: "user",
            enum: ["user", "admin"],
        },
    },
    { timestamps: true },
);

export const Image = model("User", userSchema);
