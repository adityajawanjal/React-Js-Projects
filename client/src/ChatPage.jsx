import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Left from "./components/Left";
import Right from "./components/Right";

const chatPage = () => {
  return (
    <>
      <Box w={"container.xl"} my={"10"}>
        <Grid
          templateColumns={'1fr 1fr'}
          gap={5}
        >
          <Left />
          <Right />
        </Grid>
      </Box>
    </>
  );
};

export default chatPage;
