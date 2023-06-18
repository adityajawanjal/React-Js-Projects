import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";


const Left = () => {


  return (
    <>
      <Stack
        color={"whitesmoke"}
        gap={4}
        border={"2px solid red"}
        borderRadius={"3xl"}
        p={"5"}
        my={"10"}
        display={{ base: "none", lg: "flex" }}
        w={{ lg: "96" }}
      >
        <HStack
          h={"20"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"2px solid blue"}
          pb={"2"}
        >
          <Image
            src={''}
            alt="My-Profile-DP"
            w={"14"}
            h={"14"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
            
          />
          <Menu>
            <MenuButton as={"button"} >
              <GiHamburgerMenu size={32} />
            </MenuButton>
            <MenuList color={"black"}>
              <MenuItem >Profile</MenuItem>
              <MenuItem >Search User</MenuItem>
              <MenuItem >Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Stack
          h={"lg"}
          overflowY={"auto"}
          __css={{
            "&::-webkit-scrollbar": {
              w: "2",
            },
            "&::-webkit-scrollbar-track": {
              w: "6",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10",
              bg: `linkedin.500`,
            },
          }}
        >
          good
        </Stack>
      </Stack>
    </>
  );
};

export default Left;

