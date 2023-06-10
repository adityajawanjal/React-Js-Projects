const File = require("../models/file-model");

exports.googleLoginUser = async (req,res) =>{
  try {
    const {name , email , pic} = req.body;
    const user = new File({
      name,
      email,
      pic
    })
    const result = await user.save();
    res.status(201).json(result);
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
