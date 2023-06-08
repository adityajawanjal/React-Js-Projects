import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Box } from "@chakra-ui/react";

const Login = () => {
    
    const handleOnSuccess = () =>{}
    const handleOnError = () =>{}

  return (
    <>
      <Box py={"20"} w={"80"}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
    </>
  );
};

export default Login;
