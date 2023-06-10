import React, { useState } from "react";
import { Box, Button, Center, HStack, Heading, Input, Stack } from "@chakra-ui/react";
// import { BiEdit } from "react-icons"

const App = () => {
  const [text, setText] = useState();

  const handleSubmit = () => {
    alert(text);
  };
  return (
    <>
      <Box bgColor={"black"} color={"whitesmoke"} minH={"full"} px={"4"}>
        <Stack alignItems={"center"} gap={20} w={"full"} py={"20"}>
          <Heading>Todo App - Add new Tasks !</Heading>
          <Stack flexDir={"row"}>
            <Input
              type="text"
              placeholder="Type here...✍"
              border={"2px solid blue"}
              w={{ base: "80", md: "96" }}
              onChange={(e) => setText(e.target.value)}
            />
            <Button bgColor={"blue.100"} onClick={handleSubmit}>
              {" "}
              Add
            </Button>
            {/* <Button bgColor={"blue.100"} > Update</Button> */}
          </Stack>
        </Stack>
      </Box>
      <Box>
      <Center my={"14"}>
        <Todo text={text} />
      </Center>
      </Box>
    </>
  );
};

export default App;

const Todo = ({ text }) => {
  return (
    <>
    <HStack gap={3}>
      <Input
        type="text"
        border={"2px solid red"}
        w={"96"}
        readOnly={true}
        value={text}
        py={"6"}
        textAlign={"justify"}
      />
      {/* <BiEdit/> */}
      </HStack>
    </>
  );
};
