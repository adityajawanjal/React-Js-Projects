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
  Box,
} from "@chakra-ui/react";
import { useDrawer } from "../context/DrawerContext";
import { ChatCard } from "../components/Left";
import { getAllUsers } from "../services/api";

const Draw = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { open, setOpen, users, setUsers } = useDrawer();

  useEffect(() => {
    if (open === true) {
      btnRef.current.click();
    }
  }, [open]);

  useEffect(() => {
    const handleGetAllUsers = async () => {
      const res = await getAllUsers();
      setUsers(res.users);
    };
    handleGetAllUsers();
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
          setOpen(false);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setOpen(false)} />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody >
            <Input placeholder="Search User..." mb={"10"} autoFocus={true} />
            <Box onClick={()=>{onClose();setOpen(false)}}>
            {users
              ? users.map((e) => {
                  return <ChatCard key={e._id} name={e.name} pic={e.pic} user={e} />;
                })
              : "No User"}
              </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                setOpen(false);
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

export default Draw;
