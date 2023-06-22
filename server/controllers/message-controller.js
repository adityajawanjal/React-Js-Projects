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
    const sent = await Chat.findByIdAndUpdate(chatId,{
      $push:{
        messages:newMessage._id
      },
      $set:{
        latestMessage:newMessage._id
      }
    },{
      new:true
    })
    res.status(201).json({ msg: "message sent." });
  } catch (err) {
    res.status(400).json({ msg: "err in send Message", err: err.message });
  }
};

exports.getAllMessages = async (req,res) =>{
  try {
    const {chatId} = req.body;
    const messages = await Chat.findOne({_id:chatId}).populate({
      path:'users',
      select:'name email pic'
    }).populate({
      path:'messages'
    })
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ msg: "err in getAllMessages", err: err.message });
  }
}