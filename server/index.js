const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/route");
const connectDB = require("./db/conn");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',router);

app.listen(process.env.PORT , ()=>{
  console.log(`App is listening on PORT : ${process.env.PORT}`);
})