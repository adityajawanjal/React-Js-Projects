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


const Right = () => {

  const fileRef = useRef();

  const handleFileChange = () => {
    fileRef.current.click();
  };

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
            src={''}
            alt="My-Profile-DP"
            w={"20"}
            h={"20"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
           
          />
          <Grid templateRows={"auto auto"} ml={"5"}>
            <Text fontWeight={"bold"} fontSize={{ base: "lg", sm: "3xl" }}>
              hoo
            </Text>
            <Text fontSize={"md"}>offline</Text>
          </Grid>
        </HStack>
        <Stack
          py={"5"}
          h={"96"}
          mb={"10"}
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
          <Box
              maxW={"80"}
              border={"1px solid blue"}
              borderRadius={"3xl"}
              p={"3"}
              wordBreak={"break-word"}
              h={"auto"}
              alignSelf={"flex-start"}
              mb={"3"}
              color={"linkedin.100"}
              fontSize={"1.1rem"}
            >
             messages
            </Box>
            <Box
            maxW={"80"}
            mb={"3"}
            color={"whatsapp.100"}
            alignSelf={"end"}
            border={"1px solid blue"}
            borderRadius={"3xl"}
            p={"3"}
            wordBreak={"break-word"}
            h={"auto"}
            mr={"2"}
            fontSize={"1.1rem"}
          >
            Hi Sunaina
          </Box>
          
               
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
          />
          <Input type="file" ref={fileRef} display={"none"} />
          <Button
            bgColor={"linkedin.300"}
            color={"black"}
            size={"lg"}
            w={{ sm: "20", mid: "40" }}
            h={"full"}
            display={{ base: "none", sm: "flex" }}
            
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
