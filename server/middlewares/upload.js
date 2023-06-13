const multer = require("multer");

exports.uploadProfilePic = multer({dest:`/images/profiles`});