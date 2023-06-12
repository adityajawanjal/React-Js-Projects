import React, { useEffect, useState } from 'react'
import socketIO from "socket.io-client"


const socket = socketIO(`http://localhost:5000`);
const App = () => {
  const [name , setName] = useState();
  const [text , setText] = useState();
  const [msg , setMsg] = useState([]);

  const send = () =>{
    socket.emit("message", text);
  }
  
  useEffect(()=>{
    const user = prompt("Enter your Name : ");
    setName(user);
    
  },[])

  useEffect(()=>{
   socket.on("sendmsg",(data)=>{
    setMsg([...msg ,data]);
   })
    
  },[])


  
  return (
    <>
    <input type="text" onChange={(e)=>setText(e.target.value)} />
      {name}
      <button onClick={send} >Send</button>
    <p>{msg}</p>
    </>
  )
}

export default App
