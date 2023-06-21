import { Grid, HStack, Image, Text } from "@chakra-ui/react";
import { useAccount } from "../context/AppContext";
import { startSingleChat } from "../services/api";

export const SearchChatCards = (data) => {
  const { setSelectedPerson, setCurrentChat } = useAccount();
  const handleStartSingleChat = async (userId) => {
    try {
      const data = {
        users: [userId],
      };
      const res = await startSingleChat(data);
      if (!res.chat) {
        alert(res.msg);
      }
      setCurrentChat(res.chat);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <HStack
        h={"20"}
        py={"2"}
        px={"2"}
        alignItems={"center"}
        _hover={{
          cursor: "pointer",
          bgColor: "whatsapp.100",
          color: "black",
          borderRadius: "3xl",
        }}
      >
        <Image
          src={data ? data.user.pic : ""}
          alt="My-Profile-DP"
          w={"10"}
          h={"10"}
          borderRadius={"full"}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedPerson(data.user);
          }}
        />
        <Grid
          templateRows={"auto auto"}
          ml={"2"}
          onClick={() => {
            handleStartSingleChat(data.user._id);
          }}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {data ? data.user.name : ""}
          </Text>
          <Text fontSize={"sm"}>Katrina kaif</Text>
        </Grid>
      </HStack>
    </>
  );
};

export const MyChatCards = (data) => {
  const { setSelectedPerson, setCurrentChat } = useAccount();

  return (
    <>
      <HStack
        h={"20"}
        py={"2"}
        px={"2"}
        alignItems={"center"}
        _hover={{
          cursor: "pointer",
          bgColor: "whatsapp.100",
          color: "black",
          borderRadius: "3xl",
        }}
      >
        <Image
          src={data ? data.chat.groupIcon : ""}
          alt="My-Profile-DP"
          w={"10"}
          h={"10"}
          borderRadius={"full"}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedPerson(data.chat);
          }}
        />
        <Grid
          templateRows={"auto auto"}
          ml={"2"}
          onClick={() => {
            setCurrentChat(data.chat);
          }}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {data ? data.chat.chatName : ""}
          </Text>
          <Text fontSize={"sm"}>Katrina kaif</Text>
        </Grid>
      </HStack>
    </>
  );
};
