const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: {
        type:String,
       
    },
    email: {
        type:String,
       
    },
    pic: {
        type:String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("file", fileSchema);
