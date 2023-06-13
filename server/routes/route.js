const express = require("express");
const { uploadProfilePic } = require("../middlewares/upload");
const {auth} = require("../middlewares/auth");
const { signup } = require("../controllers/user-controller");
const { startGroupChat, startSingleChat } = require("../controllers/chat-controller");
const router = express.Router();

router.post(`/user/signup`,uploadProfilePic.single('pic'), signup);
router.post(`/chat/newgroup`, auth, startGroupChat);
router.post(`/chat/newchat`, auth, startSingleChat);

module.exports = router;