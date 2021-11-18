import React, { useState, createContext } from "react";
import { JwtHandler } from "../jwt-handler/JwtHandler";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(!!JwtHandler.isJwtValid());

  const appContextValues = {
    user,
    setUser,
    isLogged,
    setIsLogged,
    books,
    setBooks,
  };

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
