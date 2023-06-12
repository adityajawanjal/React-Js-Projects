import { HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDrawer } from "../context/DrawerContext";


const SmHeader = () => {
  const {setOpen , setOpenProfile , setOpenMyChats} = useDrawer();
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
        <Input type="search" placeholder="Search User..." maxW={'96'} onClick={()=>setOpen(true)} />
        <Menu>
          <MenuButton as={'button'}>
        <GiHamburgerMenu size={32}  />
          </MenuButton>
          <MenuList color={'black'}>
          <MenuItem onClick={()=>setOpenProfile(true)}>Profile</MenuItem>
              <MenuItem onClick={()=>setOpen(true)}>Search User</MenuItem>
              <MenuItem onClick={()=>setOpenMyChats(true)}>My Chats</MenuItem>
              <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
};

export default SmHeader;
