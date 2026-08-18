import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        caption: {
            type: String, // min 5 chars
            minLength: 5,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Post = model("Post", postSchema);
