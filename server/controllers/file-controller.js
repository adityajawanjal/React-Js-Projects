const File = require("../models/file-model");

exports.uploadFile = async (req, res) => {
  const file = new File({
    name: req.file.originalname,
    path: req.file.path,
  });
  const data = await file.save();
  res.status(201).json(`http://localhost:5000/api/uploads/${data._id}`);
};

exports.getFile = async (req, res) => {
  const file = await File.findById(req.params.id);
  res.download(file.path, file.name);
};
