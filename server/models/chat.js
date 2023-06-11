const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: [
        {
            type:mongoose.Schema.Types.ObjectId,
        },
    ],
    text: {
        type:String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
