import React from "react";
import { Box, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";

const Left = () => {
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
            src="https://www.whatsappimages.in/wp-content/uploads/2022/02/girls-dp-Wallpaper-576x1024.jpg"
            alt="dp"
            borderRadius={"full"}
            w={"14"}
            h={"14"}
          />
          <Box>box</Box>
        </HStack>
        <Input type="search" placeholder="Search User..." mb={"10"} />
        <Stack gap={5} overflowY={"auto"} maxH={"inherit"} pb={"20"}>
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
          <ChatBar />
        </Stack>
      </Stack>
    </>
  );
};

export default Left;

const ChatBar = () => {
  return (
    <>
      <HStack
        borderRadius={"3xl"}
        border={"2px solid red"}
        h={"20"}
        px={"2"}
        py={"1"}
      >
        <Image
          src="https://www.whatsappimages.in/wp-content/uploads/2022/02/girls-dp-Wallpaper-576x1024.jpg"
          alt="dp"
          borderRadius={"full"}
          w={"16"}
          h={"16"}
        />
        <Stack ml={"3"}>
          <Text fontWeight={"bold"} fontSize={"1.2rem"}>
            Aditi
          </Text>
          <Text pos={"relative"} top={"-2"}>
            Hi Aditya !
          </Text>
        </Stack>
      </HStack>
    </>
  );
};
