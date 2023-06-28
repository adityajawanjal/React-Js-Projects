const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/route");
const connectDB = require("./db/conn");
const app = express();
const http = require("http");
const socketIO = require("socket.io");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: `http://localhost:5173`,
  },
});

server.listen(process.env.PORT, () => {
  console.log(`App is listening on PORT : ${process.env.PORT}`);
});

io.on("connection", (socket) => {
  console.log("socket connected.");

  socket.on("join_room", ({ room }) => {
    socket.join(room);
  });

  socket.on("msg", ({ msg , room }) => {
    io.emit("new_msg", msg);
  });
});
