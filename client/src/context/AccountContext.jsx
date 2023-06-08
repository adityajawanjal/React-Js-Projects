import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};

export default AccountProvider;
