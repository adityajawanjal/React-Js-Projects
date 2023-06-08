import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import AccountProvider from "./context/AccountContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID
const clientId =
  "633221869908-2lrfbcgl9coescq73206vluvpocb446a.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <ChakraProvider theme={theme}>
        <AccountProvider>
          <App />
        </AccountProvider>
      </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
