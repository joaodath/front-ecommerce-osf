import React, { useEffect, useState } from "react";
import { Api } from "../../../services/Api/Api";
import BookCard from "../BookCard/BookCard";
import useBooks from "../../../hooks/useBooks";
import "./BooksList.scss";
import { Button } from "@mui/material";

function BooksList() {
  const { books, setBooks } = useBooks();
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      const response = await Api.getRequest(Api.getAllBooksUrl());
      const result = await response.json();
      setBooks(result);
    };

    const loadCategories = async () => {
      const response = await Api.getRequest(Api.getCategoriesUrl());
      const result = await response.json();
      setCategories(result);
    };
    loadCategories();
    loadBooks();
  }, []);

  useEffect(() => {
    console.log(categoryName)

  }, [categoryName])

  return (
    <>
      <div className="wrapper__categories-buttons">
        {categories.map((category) => (
          <Button
            key={`category_${category.id}`}
            onClick={() => setCategoryName(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="wrapper__booksDisplay">
        {books.map((book) => (
          <BookCard key={`bookId_${book.id}`} book={book} />
        ))}
      </div>
    </>
  );
}

export default BooksList;
