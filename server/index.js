const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/route");
const connectDB = require("./db/conn");
const app = express();
const http = require('http');
const socketIO = require("socket.io");
const { log } = require("console");

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api',router);

const server = http.createServer(app);
const io = socketIO(server);

let onlineUsers = [];
io.on('connection', (socket) => {
  console.log(`socket io connected.`);

  // socket.on('user joined' , (loggedUser)=>{
  //   console.log(loggedUser.name + ' --> connected');
  //   let userExist = onlineUsers.find(e=>e._id === loggedUser._id);
  //   if(userExist){
  //     return onlineUsers;
  //   }
  //   onlineUsers = [...onlineUsers , loggedUser];
  //   socket.emit('online users',{users:'online Users are very much online'});
  // })

  socket.on('join room',(data)=>{
    socket.join(data._id);
  })

  socket.on('send msg',(data)=>{
    socket.to(data.id).emit('msg',data.msg);
  })

})

server.listen(process.env.PORT , ()=>{
  console.log(`App is listening on PORT : ${process.env.PORT}`);
})

