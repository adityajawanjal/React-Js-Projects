import React from "react";
import { Grid } from "@chakra-ui/react";
import Left from "./components/Left";
import Right from "./components/Right";

const chatPage = () => {
  return (
    <>
      <Grid
      p={'3'}
        templateColumns={{ sm: "auto", lg: "auto auto" }}
        gap={{ sm: 1, lg: 5 }}
        w={"95vw"}
        justifyContent={"center"}
      >
        <Left />
        <Right />
      </Grid>
    </>
  );
};

export default chatPage;
