import { useContext } from "react";
import { appContext } from "../contexts/AppContext";

export default function useUser() {
  const { user, setUser } = useContext(appContext);

  return {
    user,
    setUser,
  };
}
