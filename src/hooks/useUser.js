import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useUser() {
  const { user, setUser } = useContext(AppContext);

  return {
    user,
    setUser,
  };
}
