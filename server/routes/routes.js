const express = require("express");
const { upload } = require("../middlewares/upload");
const { uploadFile, getFile } = require("../controllers/file-controller");

const router = express.Router();

router.post("/uploads", upload.single("file"), uploadFile);
router.get("/uploads/:id", getFile);

module.exports = router;
