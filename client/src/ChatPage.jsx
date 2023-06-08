import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Left from "./components/Left";
import Right from "./components/Right";

const ChatPage = () => {
  return (
    <>
      <Grid templateColumns={"2fr 6fr"} gap={5}>
        <GridItem>
          <Left />
        </GridItem>
        <GridItem>
          <Right />
        </GridItem>
      </Grid>
    </>
  );
};

export default ChatPage;
