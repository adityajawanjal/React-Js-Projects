import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Left from "./components/Left";
import Right from "./components/Right";
import SmHeader from "./components/SmHeader";
import { useDrawer } from "./context/DrawerContext";

const chatPage = () => {

  const {currentChat} = useDrawer();

  return (
    <>
      <SmHeader />
      <Grid
        p={"3"}
        templateColumns={{ sm: "auto", lg: "auto auto" }}
        gap={{ sm: 1, lg: 5 }}
        w={"95vw"}
        justifyContent={"center"}
      >
        <Left />
        {
          currentChat ?
          <Right />
          :
         <>
          ""
         </>
        }
      </Grid>
    </>
  );
};

export default chatPage;
