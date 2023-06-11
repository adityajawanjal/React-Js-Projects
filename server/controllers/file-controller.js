const File = require("../models/file-model");
const Chat = require("../models/chat");

exports.startChat = async (req,res) =>{
  try {
    const {senderId , receiverId } = req.body;
    const exist = await Chat.findOne({members:{$all:[senderId , receiverId]}});
    if(!exist){
    const newConvo = new Chat({
      members:[senderId , receiverId],
    })
    const result = await newConvo.save();
    res.status(201).json(result);
  }else{
    res.status(200).json("exists already");
  }
  } catch (err) {
    console.log(err);
  }
}



exports.googleLoginUser = async (req,res) =>{
  try {
    const {name , email , pic} = req.body;
    const exist = await File.findOne({email});
    if(!exist){
    const user = new File({
      name,
      email,
      pic
    })
    const result = await user.save();
    res.status(201).json(result);
  }else{
    res.status(200).json(exist);
  }
  } catch (err) {
    console.log(err);
  }
}
exports.getAllUsers = async (req,res) =>{
  try {
    const result = await File.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
}
exports.addChat = async (req,res) =>{
  try {
    const {senderId , receiverId , text } = req.body;
    const exist = await Chat.findOne({members:{$all:[senderId , receiverId]}});
    if(!exist){
    const newConvo = new Chat({
      members:[senderId , receiverId],
      text:text
    })
    const result = await newConvo.save();
    res.status(201).json(result);
  }else{
    exist.text = text;
    res.status(201).json("result");
  }
  } catch (err) {
    console.log(err);
  }
}

