import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMyChats, setOpenMyChats] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const [currentChat, setCurrentChat] = useState();
  const [myInfo, setMyInfo] = useState();

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,
        setOpenProfile,
        openProfile,
        setOpenMyChats,
        openMyChats,
        users,
        setUsers,
        selectedPerson,
        setSelectedPerson,
        currentChat,
        setCurrentChat,
        myInfo,
        setMyInfo
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};

export default DrawerProvider;
