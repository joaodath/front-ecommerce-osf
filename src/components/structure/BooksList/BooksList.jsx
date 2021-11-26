import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import BookCard from "../BookCard/BookCard";
import useBooks from "../../../hooks/useBooks";
import "./BooksList.scss";
import { Button } from "@mui/material";

function BooksList() {
  const { books } = useBooks();

  if (!books || books===[]) {
    return <div>Sua pesquisa não encontrou nada.</div>;
  } else {
    return (
        <div className="wrapper__booksDisplay">
          {books.map((book) => (
            <BookCard key={`bookId_${book.id}`} book={book} />
          ))}
        </div>
    );
  }
}

export default BooksList;
