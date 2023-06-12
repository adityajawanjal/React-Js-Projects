import React from "react";
import { Box, Grid, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Left = () => {
  return (
    <>
      <Stack
        color={"whitesmoke"}
        gap={4}
        border={"2px solid red"}
        borderRadius={"3xl"}
        p={"5"}
        my={'10'}
        display={{base:"none",lg:"flex"}}
        w={{lg:"96"}}
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
          />
          <GiHamburgerMenu size={32} />
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
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </Stack>
      </Stack>
    </>
  );
};

export default Left;

const ChatCard = () => {
  return (
    <>
      <HStack h={"20"} py={"2"} alignItems={"center"}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtXuK_OR2BOza6OK2Cra_Wa2sTg9jBHshowPZsBM4HetrkMqhNm8tfF_DM5X6FYj62-k&s"
          alt="My-Profile-DP"
          w={"10"}
          h={"10"}
          borderRadius={"full"}
        />
        <Grid templateRows={"auto auto"} ml={"2"}>
          <Text fontWeight={"bold"} fontSize={"md"}>
            Katrina kaif
          </Text>
          <Text fontSize={"sm"}>Katrina kaif</Text>
        </Grid>
      </HStack>
    </>
  );
};
