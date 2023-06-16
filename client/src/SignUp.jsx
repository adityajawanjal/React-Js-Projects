import React, { useState } from "react";
import { Button, HStack, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { handleLogin, handleSignup } from "./services/functions";

const SignUp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  return (
    <>
      <HStack
        w={"full"}
        justifyContent={{ base: "center", lg: "space-between" }}
        flexWrap={"wrap-reverse"}
        p={"20"}
        color={"whitesmoke"}
        gap={10}
      >
        <Stack w={"96"} gap={5}>
          <Text alignSelf={"center"} fontSize={"4xl"} mb={"10"}>
            {login ? "Login" : "Sign Up"}
          </Text>
          <Input
            type="text"
            placeholder="Enter your Name..."
            h={"14"}
            display={login ? "none" : ""}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter your Email..."
            h={"14"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your Password..."
            h={"14"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="file"
            p={"3"}
            h={"14"}
            display={login ? "none" : ""}
            border={"none"}
            onChange={(e) => setPic(e.target.files[0])}
          />

          <Button
            bgColor={"orange.300"}
            h={"14"}
            onClick={
              login
                ? () => handleLogin({ email, password })
                : () => handleSignup({ name, email, password, pic })
            }
          >
            {login ? "Login" : "Sign Up"}
          </Button>
          <Text alignSelf={"center"}>
            {login ? "Don`t have an account ? " : "Already have an account ?"}{" "}
          </Text>
          <Text
            display={"inline"}
            fontSize={"lg"}
            color={"red.400"}
            pb={"1"}
            borderBottom={"blue"}
            ml={"3"}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login ? "Sign Up" : "Login"}
          </Text>
        </Stack>
        <Stack alignSelf={"self-start"}>
          <Heading>Welocome to the Chat World !</Heading>
          <Heading>The " Chat-King Web"</Heading>
        </Stack>
      </HStack>
    </>
  );
};

export default SignUp;
