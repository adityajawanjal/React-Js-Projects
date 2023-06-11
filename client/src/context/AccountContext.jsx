import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState();
  
  return (
    <AccountContext.Provider value={{ account, setAccount , person , setPerson }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};

export default AccountProvider;
