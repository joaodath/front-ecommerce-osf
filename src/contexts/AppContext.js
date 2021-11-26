import React, { useState, useEffect, createContext } from "react";
import { JwtHandler } from "../jwt-handler/JwtHandler";
import { Api } from "../Api/Api"

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(!!JwtHandler.isJwtValid());

  useEffect(() => {
    if (isLogged) {
      const loadUser = async () => {
        const response = await Api.buildApiGetRequest(Api.readUserUrl(), true)
        const result = await response.json();
        setUser(result)
      }
      loadUser()
    }

    if (!isLogged) {
      setUser({})
    }

  }, [isLogged])
  
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
