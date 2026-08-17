import { Schema, model } from "mongoose";

const likeSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        onModel: {
            type: String,
            enum: ["Post", "Comment"],
        },
        likeableId: {
            type: Schema.Types.ObjectId,
            refPath: "onModel",
        },
    },
    {
        timestamps: true,
    },
);

// Compound unique index: prevents duplicate likes & indexes lookups
likeSchema.index({ userId: 1, likeableId: 1, onModel: 1 }, { unique: true });
likeSchema.index({ likeableId: 1, onModel: 1 });

export const Like = model("Like", likeSchema);
