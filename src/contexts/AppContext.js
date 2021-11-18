import React, { useState, createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(undefined);

  const appContextValues = {
    user,
    setUser,
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
