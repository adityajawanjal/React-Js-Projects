import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMyChats, setOpenMyChats] = useState(false);

  return (
  <DrawerContext.Provider value={{ open, setOpen , setOpenProfile , openProfile , setOpenMyChats ,openMyChats  }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};

export default DrawerProvider;
