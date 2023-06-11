const express = require("express");
// const { upload } = require("../middlewares/upload");
const {  googleLoginUser, getAllUsers, startChat, addChat } = require("../controllers/file-controller");

const router = express.Router();

router.post("/users/login", googleLoginUser);
router.post("/chats/", startChat);
router.post("/chats/get", addChat);
router.get("/users", getAllUsers);

module.exports = router;
