import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [auth, setAuth] = useState();
  const [openSearch, setOpenSearch] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allMyChats, setAllMyChats] = useState([]);
  const [openMyChatDrawer, setOpenMyChatDrawer] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState();
  const [selectedChat, setSelectedChat] = useState();

  return (
    <AppContext.Provider
      value={{
        setOpenProfile,
        openProfile,
        setAuth,
        auth,
        setOpenSearch,
        openSearch,
        setAllUsers,
        allUsers,
        setAllMyChats,
        allMyChats,
        setOpenMyChatDrawer,
        openMyChatDrawer,
        setSelectedPerson,
        selectedPerson,
        setSelectedChat,
        selectedChat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AppContext);
};

export default AppProvider;
