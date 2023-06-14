const Chat = require("../models/chat-model");
const User = require("../models/user-model");
const cloudinary = require("cloudinary").v2;

exports.startGroupChat = async (req, res) => {
  try {
    const { chatName, users } = req.body;
    if (!chatName || !users) {
      return res.status(400).json({ msg: "Please fill details." });
    }
    if (users.length < 2) {
      return res.status(400).json({ msg: "Min 3 users required." });
    }
    const chat = new Chat({
      chatName: chatName,
      isGroupChat: true,
      users: users,
      admin: req.user._id,
    });
    chat.users.push(req.user._id);
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: req.file.name,
        folder: `Chat-King/Groups`,
      });
      if (!result) {
        return res.status(400).json({ msg: `Error in groupIcon upload !` });
      }
      chat.groupIcon = result.secure_url;
    }
    const newGroupChat = await chat.save();
    const completeChat = await Chat.findById(newGroupChat._id)
      .populate("users", "name email pic")
      .populate("admin", "name email pic");
    res.status(201).json({ msg: `Group Created .`, chat: completeChat });
  } catch (err) {
    res.status(400).json({ msg: `Error in startGroupChat`, err: err.message });
  }
};

exports.startSingleChat = async (req, res) => {
  try {
    const { users } = req.body;
    if (!users) {
      return res.status(400).json({ msg: "Please fill details." });
    }
    const opponentExists = await User.findOne({ _id: users[0] });
    if (!opponentExists) {
      return res
        .status(400)
        .json({ msg: `Error in startSingleChat , opponent not found !` });
    }
    const chat = new Chat({
      chatName: opponentExists.name,
      isGroupChat: false,
      users: users,
      groupIcon: opponentExists.pic,
    });
    const newSingleChat = await chat.save();
    const completeChat = await Chat.findById(newSingleChat._id).populate(
      "users",
      "name email pic"
    );
    res.status(201).json({ msg: `Chat Started .`, chat: completeChat });
  } catch (err) {
    res.status(400).json({ msg: `Error in startSingleChat`, err: err.message });
  }
};

exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ users: req.user._id });
    res.status(200).json({ msg: `All chats Fetched !`, chats: chats });
  } catch (err) {
    res.status(400).json({ msg: `Error in getAllChats !`, err: err.message });
  }
};
