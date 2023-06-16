import React from "react";
import { Box } from "@chakra-ui/react";
import ChatPage from "./ChatPage";
import Draw from "./chakraComponents/Draw";
import Model from "./chakraComponents/Model";
import MyChatDrawer from "./chakraComponents/MyChatDrawer";
import SignUp from "./SignUp";

const App = () => {
  
  const auth = localStorage.getItem("chatUser");

  return (
    <>
      <Box minH={"100vh"} bgColor={"back"}>
        <Draw />
        <MyChatDrawer />
        <Model />
        {auth ? <ChatPage /> : <SignUp />}
      </Box>
    </>
  );
};

export default App;
