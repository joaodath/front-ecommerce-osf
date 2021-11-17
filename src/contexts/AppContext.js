import React, { useState, createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(undefined);

  const storage = localStorage.getItem("user" | undefined)
  setUser(storage)

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
