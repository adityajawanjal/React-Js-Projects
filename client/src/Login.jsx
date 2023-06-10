import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { googleLoginAccount } from "./services/api";
import { useAccount } from "./context/AccountContext";

const Login = () => {

  const {setAccount} = useAccount();

  const handleSuccess = async(res) =>{
    let decoded = jwt_decode(res.credential);
    const data = {
      name:decoded.given_name,
      email:decoded.email,
      pic:decoded.picture
    }
    const userinfo = await googleLoginAccount(data);
    setAccount(userinfo);
  }
  const handleError = (err) =>{
    console.log(err);
  }
  return (
    <>
    <Heading>Login Karo</Heading>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </>
  );
};

export default Login;
