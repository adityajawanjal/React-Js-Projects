import React from "react";
import { Box, Heading, Input, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Box bgColor={"black"} color={"whitesmoke"} minH={"full"} px={"4"} >
        <Stack alignItems={"center"} gap={20} w={"full"} py={"20"}>
          <Heading>Todo App - Add new Tasks !</Heading>
          <Input
            type="text"
            placeholder="Type here...✍"
            border={"2px solid blue"}
            w={{base:"80",md:"96"}}
          />
        </Stack>
      </Box>
    </>
  );
};

export default App;
