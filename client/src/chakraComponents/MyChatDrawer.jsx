import React, { useEffect, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useDrawer } from "../context/DrawerContext";
import { ChatCard } from "../components/Left";

const MyChatDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { openMyChats, setOpenMyChats } = useDrawer();

  useEffect(() => {
    if (openMyChats === true) {
      btnRef.current.click();
    }
  }, [openMyChats]);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} display={"none"}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => {
          onClose();
          setOpenMyChats(false);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setOpenMyChats(false)} />
          <DrawerHeader>My Chats :- </DrawerHeader>
          <DrawerBody>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                setOpenMyChats(false);
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyChatDrawer;
