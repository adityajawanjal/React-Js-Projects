const express = require("express");
// const { upload } = require("../middlewares/upload");
const {  googleLoginUser, getAllUsers } = require("../controllers/file-controller");

const router = express.Router();

router.post("/users/login", googleLoginUser);
router.get("/users", getAllUsers);

module.exports = router;
