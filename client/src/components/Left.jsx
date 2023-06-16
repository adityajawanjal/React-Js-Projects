import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDrawer } from "../context/DrawerContext";
import { getAllMyChats } from "../services/api";
import { handleLogout, handleStartSingleChat } from "../services/functions";

const Left = () => {
  const { setOpen, setOpenProfile , setSelectedPerson } = useDrawer();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const handleGetAllMyChats = async () => {
      const res = await getAllMyChats();
      setChats(res.chats);
    };
    handleGetAllMyChats();
  }, []);

  return (
    <>
      <Stack
        color={"whitesmoke"}
        gap={4}
        border={"2px solid red"}
        borderRadius={"3xl"}
        p={"5"}
        my={"10"}
        display={{ base: "none", lg: "flex" }}
        w={{ lg: "96" }}
      >
        <HStack
          h={"20"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"2px solid blue"}
          pb={"2"}
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNmItFX5g3HSU1UiK_JLWW_ADJA9nWTofw&usqp=CAU"
            alt="My-Profile-DP"
            w={"14"}
            h={"14"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
            onClick={() => setOpenProfile(true)}
          />
          <Menu>
            <MenuButton as={"button"}>
              <GiHamburgerMenu size={32} />
            </MenuButton>
            <MenuList color={"black"}>
              <MenuItem onClick={() =>{setSelectedPerson(); setOpenProfile(true)}}>Profile</MenuItem>
              <MenuItem onClick={() => setOpen(true)}>Search User</MenuItem>
              <MenuItem onClick={()=>handleLogout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Stack
          h={"lg"}
          overflowY={"auto"}
          __css={{
            "&::-webkit-scrollbar": {
              w: "2",
            },
            "&::-webkit-scrollbar-track": {
              w: "6",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10",
              bg: `linkedin.500`,
            },
          }}
        >
          {chats ? 
            chats.map((e) => {
              return <ChatCard key={e._id} name={e.chatName} pic={e.groupIcon} user={e} />
            })
           : 
            <Box color={"whitesmoke"}>Start a new Chat</Box>
          }
        </Stack>
      </Stack>
    </>
  );
};

export default Left;

export const ChatCard = ({ name , pic , user }) => {

  const { setOpenProfile, setSelectedPerson, setCurrentChat } = useDrawer();

  return (
    <>
      <HStack
        h={"20"}
        py={"2"}
        px={"2"}
        alignItems={"center"}
        _hover={{
          cursor: "pointer",
          bgColor: "whatsapp.100",
          color: "black",
          borderRadius: "3xl",
        }}
        onClick={() => {setSelectedPerson(user); handleStartSingleChat(user._id)}}
      >
        <Image
          src={pic}
          alt="My-Profile-DP"
          w={"10"}
          h={"10"}
          borderRadius={"full"}
          _hover={{ cursor: "pointer" }}
          onClick={() => setOpenProfile(true)}
        />
        <Grid
          templateRows={"auto auto"}
          ml={"2"}
          onClick={() => {
            setCurrentChat(user);
          }}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {name}
          </Text>
          <Text fontSize={"sm"}>Katrina kaif</Text>
        </Grid>
      </HStack>
    </>
  );
};
