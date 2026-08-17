import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        caption: {
            type: String, // min 5 chars
            minLength: 5,
        },
        image: {
            type: String,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

export const Post = model("Post", postSchema);
