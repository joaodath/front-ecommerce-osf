import React from "react";
import BookCard from "../BookCard/BookCard";
import useBooks from "../../../hooks/useBooks";
import "./BooksList.scss";

function BooksList() {
  const { books } = useBooks();

  // useEffect(() => {}, [books]);

  if (!books || books === []) {
    return <div>Sua pesquisa não encontrou nada.</div>;
  } else {
    return (
      <div className="container__booksDisplay">
        {books.map((book) => (
          <BookCard key={`bookId_${book.id}`} book={book} />
        ))}
      </div>
    );
  }
}

export default BooksList;
