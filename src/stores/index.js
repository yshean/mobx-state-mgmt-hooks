import React from "react";
import { useLocalStore } from "mobx-react-lite";

import createFriendStore from "./friendStore";
import createUserStore from "./userStore";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const friendStore = useLocalStore(createFriendStore);
  const userStore = useLocalStore(createUserStore);
  const stores = { friendStore, userStore };

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const stores = React.useContext(StoreContext);
  if (!stores) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return stores;
};
