import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
        content: {
            type: String, // min 1 char
            required: true,
            minLength: 1,
            trim: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        onModel: {
            type: String,
            enum: ["Post", "Comment"],
            required: true,
        },
        commentableId: {
            type: Schema.Types.ObjectId,
            refPath: "onModel",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

commentSchema.virtual("replies", {
    ref: "Comment",
    localField: "_id",
    foreignField: "commentableId",
    match: { onModel: "Comment" },
});

commentSchema.set("toObject", { virtuals: true });
commentSchema.set("toJSON", { virtuals: true });

commentSchema.index({ onModel: 1, commentableId: 1 });

export const Comment = model("Comment", commentSchema);
