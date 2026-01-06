import mongoose from "mongoose";

const pasteSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    expiresAt: { type: Date },
    maxViews: { type: Number },
    viewCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Paste = mongoose.model("Paste", pasteSchema);
