import React, { useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDrawer } from "../context/DrawerContext";

const Model = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openProfile, setOpenProfile, selectedPerson } = useDrawer();
  const btnRef = useRef();

  useEffect(() => {
    if (openProfile === true) {
      btnRef.current.click();
    }
  }, [openProfile]);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} display={"none"}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setOpenProfile(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile :- </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={5} alignItems={"center"}>
              <Image
                src={selectedPerson? selectedPerson.pic || selectedPerson.groupIcon : ""}
                alt="My-Profile-DP"
                w={"60"}
                h={"60"}
                borderRadius={"full"}
              />
              <Heading>{selectedPerson? selectedPerson.name || selectedPerson.chatName : ""}</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quibusdam quis recusandae rem quam temporibus
                sapiente voluptas velit accusamus delectus.
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setOpenProfile(false);
              }}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model;
