const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ msg: `Name , Email and Password Required !` });
    }
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ msg: `User already Exists !` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: req.file.name,
        folder: `Chat-King/Users`,
      });
      if (!result) {
        return res.status(400).json({ msg: `Error in image upload !` });
      }
      user.pic = result.secure_url;
    }
    const savedUser = await user.save();
    const token = jwt.sign({ token: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({
      msg: `Registered Successfully !`,
      token: {
        token,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: `Error in signup !` , err:err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: `Email and Password required !` });
    }
    const userExist = await User.findById({ email: email });
    if (!userExist) {
      return res.status(400).json({ msg: `No user found !` });
    }
    const passwordMatched = await bcrypt.compare(password, userExist.password);
    if (!passwordMatched) {
      return res.status(400).json({ msg: `Incorrect Email or password !` });
    }
    const token = jwt.sign({ token: userExist._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({
      msg: `Login Successfully !`,
      token: {
        token,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: `Error in login !` });
  }
};
