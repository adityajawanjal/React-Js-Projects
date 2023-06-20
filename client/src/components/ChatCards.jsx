import { Grid, HStack, Image, Text } from "@chakra-ui/react";
import { useAccount } from "../context/AppContext";


export const SearchChatCards = (data) => {  
  const { setSelectedPerson } = useAccount();
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
            src={data ? data.user.pic : ''}
            alt="My-Profile-DP"
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
            onClick={()=>{setSelectedPerson(data.user)}}
          />
          <Grid
            templateRows={"auto auto"}
            ml={"2"}
          >
            <Text fontWeight={"bold"} fontSize={"md"}>
            {data ? data.user.name : ''}
            </Text>
            <Text fontSize={"sm"}>Katrina kaif</Text>
          </Grid>
        </HStack>
      </>
    );
  };
  
export const MyChatCards = (data) => {  
  const { setSelectedPerson } = useAccount();
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
            src={data ? data.chat.groupIcon : ''}
            alt="My-Profile-DP"
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
            onClick={()=>{setSelectedPerson(data.chat)}}
          />
          <Grid
            templateRows={"auto auto"}
            ml={"2"}
          >
            <Text fontWeight={"bold"} fontSize={"md"}>
            {data ? data.chat.chatName : ''}
            </Text>
            <Text fontSize={"sm"}>Katrina kaif</Text>
          </Grid>
        </HStack>
      </>
    );
  };
  