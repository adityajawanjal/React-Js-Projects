import React, { useEffect, useState } from "react";
import { Box, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import { useAccount } from "../context/AccountContext";
import { allUsers, setConversation } from "../services/api";

const Left = () => {
  const {account} = useAccount();
  const [users,setUsers] = useState([]);
 
  

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await allUsers();
      setUsers(res);
    }
    fetchData();
  },[])
  return (
    <>
      <Stack border={"2px solid red"} minH={"100vh"} py={"6"} px={"3"}>
        <HStack
          h={"16"}
          justify={"space-between"}
          px={"3"}
          border={"2px solid blue"}
          borderRadius={"3xl"}
          mb={"10"}
        >
          <Image
            src={account.pic}
            alt="dp"
            borderRadius={"full"}
            w={"14"}
            h={"14"}
          />
          <Box>{account.name}</Box>
        </HStack>
        <Input type="search" placeholder="Search User..." mb={"10"} />
        <Stack gap={5} overflowY={"auto"} maxH={"inherit"} pb={"20"}>
          {
            users.map((e)=>{
              return(
                account.email !== e.email && <ChatBar key={e.email} user={e} />
              )
            })
          }
        </Stack>
      </Stack>
    </>
  );
};

export default Left;

const ChatBar = ({user}) => {
  const {setPerson , account , person} = useAccount();

  const setTheChat = async(user)=>{
    setPerson(user);
    const data = {
      senderId: account._id,
      receiverId:person._id,
    }
    const result = await setConversation(data);
    console.log(result);
  }

  return (
    <>
      <HStack
        borderRadius={"3xl"}
        border={"2px solid red"}
        h={"20"}
        px={"2"}
        py={"1"}
        onClick={()=>setTheChat(user)}
      >
        <Image
          src={user.pic}
          alt="dp"
          borderRadius={"full"}
          w={"16"}
          h={"16"}
        />
        <Stack ml={"3"}>
          <Text fontWeight={"bold"} fontSize={"1.2rem"}>
            {user.name}
          </Text>
          <Text pos={"relative"} top={"-2"}>
            Hi Aditya !
          </Text>
        </Stack>
      </HStack>
    </>
  );
};
