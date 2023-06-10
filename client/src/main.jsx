import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import AccountProvider from "./context/AccountContext";
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="62983831598-j9cj7qhik6dpdvndag7mm3nvo6cbbvfp.apps.googleusercontent.com">
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AccountProvider>
        <App />
      </AccountProvider>
    </ChakraProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
