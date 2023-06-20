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
import { useAccount } from "../context/AppContext";

const PersonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { selectedPerson, setSelectedperson } = useAccount();

  const friendEmail = () => {
    if (selectedPerson.users.length < 3) {
      const name = selectedPerson.users.filter(
        (e) => e.name === selectedPerson.chatName
      )[0].email;
      return name;
    }
    return "";
  };

  useEffect(() => {
    if (selectedPerson) {
      btnRef.current.click();
    }
  }, [selectedPerson]);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} display={"none"}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelectedperson();
        }}
        size={{ base: "xs", sm: "sm", mid: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile :- </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={5} alignItems={"center"}>
              <Image
                src={
                  selectedPerson
                    ? selectedPerson.groupIcon
                      ? selectedPerson.groupIcon
                      : selectedPerson.pic
                    : ""
                }
                alt="My-Profile-DP"
                w={"60"}
                h={"60"}
                borderRadius={"full"}
              />
              <Heading>
                {selectedPerson
                  ? selectedPerson.chatName
                    ? selectedPerson.chatName
                    : selectedPerson.name
                  : ""}
              </Heading>
              <Text fontSize={"2xl"}>
                {selectedPerson
                  ? selectedPerson.users
                    ? friendEmail()
                    : selectedPerson.email
                  : ""}
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                selectedPerson ? "" : setSelectedperson({});
              }}
              size={{ base: "xs", sm: "sm", mid: "lg" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PersonModal;