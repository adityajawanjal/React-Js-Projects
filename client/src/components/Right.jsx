import React from "react";
import { Box, Input } from "@chakra-ui/react";

const Right = () => {
  return (
    <>
      <Box
        border={"2px solid black"}
        h={"99vh"}
        pos={"sticky"}
        top={"0.5"}
        bgColor={"whatsapp.100"}
      >
        <Input type="text" placeholder="Type here..." h={"14"} pos={"absolute"} w={"full"} bottom={"0.5"} bgColor={"linkedin.100"} />
      </Box>
    </>
  );
};

export default Right;
