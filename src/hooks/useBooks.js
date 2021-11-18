import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useBooks() {
  const { books, setBooks } = useContext(AppContext);

  return {
    books,
    setBooks,
  };
}
