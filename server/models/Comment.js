const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: { type: String, required: true },
    // На чьей странице находится коментарий
    pageId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // Кто оставил коментарий
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Comment", schema);
