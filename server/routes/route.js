const express = require("express");
const { uploadProfilePic, uploadGroupIcon } = require("../middlewares/upload");
const { auth } = require("../middlewares/auth");
const {
  signup,
  login,
  getAllUsers,
  test,
} = require("../controllers/user-controller");
const {
  startGroupChat,
  startSingleChat,
  getAllChats,
} = require("../controllers/chat-controller");
const { sendMessage } = require("../controllers/message-controller");
const router = express.Router();

//users-controller
router.post(`/users/signup`, uploadProfilePic.single("pic"), signup);
router.post(`/users/login`, login);

router.get(`/users`,auth, getAllUsers);

// chats-controller
router.post(
  `/chats/newgroup`,
  auth,
  uploadGroupIcon.single("pic"),
  startGroupChat
);
router.post(`/chats/newchat`, auth, startSingleChat);

router.get(`/chats`, auth, getAllChats);
router.post(`/messages`, auth, sendMessage);

module.exports = router;
