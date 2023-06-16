import React, { useEffect, useRef, useState } from "react";
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
} from "@chakra-ui/react";
import { useDrawer } from "../context/DrawerContext";
import { ChatCard } from "../components/Left";
import { getAllMyChats } from "../services/api";

const MyChatDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { openMyChats, setOpenMyChats } = useDrawer();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (openMyChats === true) {
      btnRef.current.click();
    }
  }, [openMyChats]);

  useEffect(() => {
    const handleGetAllMyChats = async () => {
      const res = await getAllMyChats();
      setChats(res.chats);
    };
    handleGetAllMyChats();
  }, []);

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
            {chats?.map((e) => {
              return <ChatCard key={e._id} name={e.name || e.groupName} pic={e.pic || e.groupIcon} user={e} />;
            })}
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
