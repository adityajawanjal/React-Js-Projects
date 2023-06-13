const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/route");
const connectDB = require("./db/conn");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',router);

connectDB();

app.listen(process.env.PORT , ()=>{
  console.log(`App is listening on PORT : ${process.env.PORT}`);
})