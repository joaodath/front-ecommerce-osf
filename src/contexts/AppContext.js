import React, { createContext } from "react";
// import CartContextProvider from "./CartContext";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const user = "teste"
    const appContextValues = {
        user
    };

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
