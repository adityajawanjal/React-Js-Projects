const express = require("express");
const router = require("./routes/routes");
const connectDB = require("./db/conn");
require("dotenv").config();
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`app is listening on PORT : ${process.env.PORT}`);
});
