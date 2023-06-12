import React from "react";
import { Box } from "@chakra-ui/react";
import ChatPage from "./ChatPage";
import Draw from "./chakraComponents/Draw";
import Model from "./chakraComponents/Model";
import MyChatDrawer from "./chakraComponents/MyChatDrawer";

const App = () => {
  return (
    <>
      <Box minH={"100vh"} bgColor={"back"}>
       <Draw/>
       <MyChatDrawer/>
       <Model/>
          <ChatPage />
      </Box>
    </>
  );
};

export default App;
