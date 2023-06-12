const express = require("express");
const app = express();
const PORT = 5000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const socketIO = require("socket.io")(http , {
  cors:{
    origin:`http://localhost:5173`
  }
})

socketIO.on('connection',(socket)=>{
  console.log('socket connected....node');
  socket.on("message",(msg)=>{
    socketIO.emit("sendmsg",msg);
})
})



app.get("/api", (req, res) => {
  res.send("Working...");
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


