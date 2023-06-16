const Message = require("../models/message-model");
const Chat = require("../models/chat-model");

exports.sendMessage = async (req, res) => {
  try {
    const { content, chatId } = req.body;
    const message = new Message({
      senderId: req.user._id,
      content: content,
      chatId: chatId,
    });
    const newMessage = await message.save();
    const sent = await Chat.findByIdAndUpdate(
      { _id: chatId },
      {
        $push: { messages: newMessage._id },
      }
    );
    res.status(201).json({ msg: "message sent." });
  } catch (err) {
    res.status(400).json({ msg: "err in send Message", err: err.message });
  }
};
