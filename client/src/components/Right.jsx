import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useAccount } from "../context/AccountContext";
import { getConvo } from "../services/api";

const Right = () => {
  const [text , setText] = useState();
  const {account , person} = useAccount();

  // useEffect(()=>{
  //   const getConvoDetails = async () =>{
  //     const data1 = {
  //       senderId:account._id,
  //       receiverId:person._id,
  //       text:text
  //     }
  //     const res = await getConvo(data1);
  //     console.log(res);
    
  //   }
  //   getConvoDetails();
  // },[person])

  const sendText =async (e) =>{
    const code = e.keyCode ;
    if(code === 13){
      const data = {
        senderId:account._id,
        receiverId:person._id,
        text:text
      }
      const res = await getConvo(data);
      console.log(res);
    }
  }
  return (
    <>
      <Box
        border={"2px solid black"}
        h={"99vh"}
        pos={"sticky"}
        top={"0.5"}
        bgColor={"whatsapp.100"}
      >
        <Box>
          <Navbar/>
        </Box>
        <Box></Box>
        <Input type="text" placeholder="Type here..." h={"14"} pos={"absolute"} w={"full"} bottom={"0.5"} bgColor={"linkedin.100"} onChange={(e)=>setText(e.target.value)} onKeyUp={(e)=>sendText(e)} />
      </Box>
    </>
  );
};

export default Right;
