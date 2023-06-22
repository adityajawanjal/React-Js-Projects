import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { useAccount } from "../context/AppContext";
import { getSingleChat, sendMessage } from "../services/api";

const Right = () => {
  const fileRef = useRef();
  const msgBox = useRef();

  useEffect(() => {
    msgBox.current.scrollTo("0", msgBox.current.scrollHeight);
  });
  const { setSelectedPerson, currentChat, auth } = useAccount();
  const [messages, setMessages] = useState([]);

  const handleFileChange = () => {
    fileRef.current.click();
  };

  const handleGetSingleChat = async () => {
    try {
      const res = await getSingleChat(currentChat._id);
      setMessages(res.chat.messages);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendMessage = async (e) => {
    try {
      const data = {
        content: e.text,
        chatId: e.chatId,
      };
      await sendMessage(data);
      await handleGetSingleChat(data.chatId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentChat) {
      handleGetSingleChat();
    }
  }, [currentChat]);

  const [text, setText] = useState();

  return (
    <>
      <Stack
        my={"10"}
        p={"3"}
        border={"2px solid red"}
        borderRadius={"3xl"}
        color={"whitesmoke"}
        w={{
          sm: "80",
          mid: "container.sm",
          "2xl": "container.xl",
        }}
      >
        <HStack
          h={"24"}
          alignItems={"center"}
          borderBottom={"2px solid orange"}
        >
          <Image
            src={
              currentChat
                ? currentChat.isGroupChat
                  ? currentChat.groupIcon
                  : currentChat.users.filter((e) => e._id !== auth._id)[0].pic
                : ""
            }
            alt="My-Profile-DP"
            w={"20"}
            h={"20"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPerson(currentChat);
            }}
          />
          <Grid templateRows={"auto auto"} ml={"5"}>
            <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "3xl" }}>
              {currentChat
                ? currentChat.isGroupChat
                  ? currentChat.chatName
                  : currentChat.users.filter((e) => e._id !== auth._id)[0].name
                : ""}
            </Text>
            <Text fontSize={{ base: "sm", sm: "md" }}>offline</Text>
          </Grid>
        </HStack>
        <Stack
          ref={msgBox}
          py={"5"}
          h={"96"}
          mb={"10"}
          overflowY={"auto"}
          __css={{
            "&::-webkit-scrollbar": {
              w: "1",
            },
            "&::-webkit-scrollbar-track": {
              w: "3",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10",
              bg: `linkedin.500`,
            },
          }}
        >
          {messages
            ? messages.map((e) => {
                return (
                  <Box
                    key={e._id}
                    maxW={"80"}
                    mb={"3"}
                    mr={"2"}
                    border={"1px solid blue"}
                    borderRadius={"3xl"}
                    p={"3"}
                    wordBreak={"break-word"}
                    h={"auto"}
                    alignSelf={
                      auth
                        ? auth._id === e.senderId._id
                          ? "end"
                          : "flex-start"
                        : "flex-start"
                    }
                    color={"linkedin.100"}
                    fontSize={"1.1rem"}
                  >
                    {e.content}
                  </Box>
                );
              })
            : ""}
        </Stack>
        <HStack h={"14"} gap={5} color={"whitesmoke"} px={"3"}>
          <Box _hover={{ cursor: "pointer" }}>
            <ImAttachment size={28} onClick={handleFileChange} />
          </Box>
          <Input
            type="text"
            placeholder="Message..."
            w={"70%"}
            h={"full"}
            onChange={(e) => setText(e.target.value)}
            value={text ? text : ""}
          />
          <Input type="file" ref={fileRef} display={"none"} />
          <Button
            bgColor={"linkedin.300"}
            color={"black"}
            size={"lg"}
            w={{ sm: "20", mid: "40" }}
            h={"full"}
            display={{ base: "none", sm: "flex" }}
            onClick={() => {
              setText();
              handleSendMessage({ text: text, chatId: currentChat._id });
            }}
          >
            Send
          </Button>
          <Box display={{ base: "flex", sm: "none" }}>
            <IoSend size={28} />
          </Box>
        </HStack>
      </Stack>
    </>
  );
};

export default Right;
