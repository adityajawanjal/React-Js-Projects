

export const MyChatCard = () => {
     
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
            src={''}
            alt="My-Profile-DP"
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            _hover={{ cursor: "pointer" }}
          
          />
          <Grid
            templateRows={"auto auto"}
            ml={"2"}
         
          >
            <Text fontWeight={"bold"} fontSize={"md"}>
            'gihoihoi'
            </Text>
            <Text fontSize={"sm"}>Katrina kaif</Text>
          </Grid>
        </HStack>
      </>
    );
  };
  