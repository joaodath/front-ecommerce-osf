import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useUser() {
  const { user, setUser, isLogged, setIsLogged } = useContext(AppContext);

  return {
    user,
    setUser,
    isLogged,
    setIsLogged,
  };
}
