const express = require("express");
const { uploadProfilePic, uploadGroupIcon } = require("../middlewares/upload");
const { auth } = require("../middlewares/auth");
const {
  signup,
  login,
  getAllUsers,
} = require("../controllers/user-controller");
const {
  startGroupChat,
  startSingleChat,
  getAllChats,
} = require("../controllers/chat-controller");
const router = express.Router();

router.post(`/users/signup`, uploadProfilePic.single("pic"), signup);
router.post(`/users/login`, login);

router.get(`/users`, getAllUsers);

router.post(
  `/chats/newgroup`,
  auth,
  uploadGroupIcon.single("pic"),
  startGroupChat
);
router.post(`/chats/newchat`, auth, startSingleChat);

router.get(`/chats`, auth, getAllChats);

module.exports = router;
