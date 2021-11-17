import { useContext } from "react";
import { appContext } from "../contexts/AppContext";

export default function useBooks() {
  const { books, setBooks } = useContext(appContext);

  return {
    books,
    setBooks,
  };
}
