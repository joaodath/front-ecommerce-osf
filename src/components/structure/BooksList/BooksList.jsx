import React, { useEffect, useState } from "react";
import { Api } from "../../../services/Api/Api";
import BookCard from "../BookCard/BookCard";

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const response = await Api.getRequest(Api.getAllBooksUrl());
      const result = await response.json();
      console.log(response)
      setBooks(result);
    };
    loadBooks();
  }, []);

  return (
    <div className="container__booksDisplay">
      {books.map((book) => (
        <BookCard key={`bookId_${book.id}`} book={book} />
      ))}
    </div>
  );
}

export default BooksList;
