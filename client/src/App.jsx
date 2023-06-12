import React from "react";
import { Box, Center } from "@chakra-ui/react";
import ChatPage from "./ChatPage";

const App = () => {
  return (
    <>
      <Box minH={"100vh"} bgColor={"back"}>
          <ChatPage />
      </Box>
    </>
  );
};

export default App;
