import { HStack, Image, Input } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SmHeader = () => {
  return (
    <>
      <HStack
        h={"20"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={{base:"3",sm:"5"}}
        w={'full'}
        color={'whitesmoke'}
        gap={5}
        display={{base:"flex",lg:"none"}}
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNmItFX5g3HSU1UiK_JLWW_ADJA9nWTofw&usqp=CAU"
          alt="My-Profile-DP"
          w={"14"}
          h={"14"}
          borderRadius={"full"}
        />
        <Input type="search" placeholder="Search User..." maxW={'96'} />
        <GiHamburgerMenu size={32} />
      </HStack>
    </>
  );
};

export default SmHeader;
