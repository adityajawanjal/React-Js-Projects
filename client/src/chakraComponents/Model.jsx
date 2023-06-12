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
  const { openProfile, setOpenProfile } = useDrawer();
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
          <ModalHeader>My Profile :- </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={5} alignItems={'center'} >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtXuK_OR2BOza6OK2Cra_Wa2sTg9jBHshowPZsBM4HetrkMqhNm8tfF_DM5X6FYj62-k&s"
                alt="My-Profile-DP"
                w={"60"}
                h={"60"}
                borderRadius={"full"}
                
              />
              <Heading>Katrina Kaif</Heading>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quis recusandae rem quam temporibus sapiente voluptas velit accusamus delectus.</Text>
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
