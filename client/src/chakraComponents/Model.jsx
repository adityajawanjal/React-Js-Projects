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
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} display={"none"}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
       onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile :- </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={5} alignItems={"center"}>
              <Image
                src={
                   ""
                }
                alt="My-Profile-DP"
                w={"60"}
                h={"60"}
                borderRadius={"full"}
              />
              <Heading>
                { ""}
              </Heading>
              <Text fontSize={"2xl"}>
               Good cat
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model;
