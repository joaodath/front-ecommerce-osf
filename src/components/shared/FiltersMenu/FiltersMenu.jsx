import React, { useEffect, useState } from "react";
import useBooks from "../../../hooks/useBooks";
import { Api } from "../../../Api/Api";
import { Button } from "@mui/material";
import "./FiltersMenu.scss";

function FiltersMenu(props) {
  const { setBooks } = useBooks();
  const [filter, setFilter] = useState("");
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadAuthors = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllAuthorUrl(),
        false
      );
      const result = await response.json();
      setAuthors(result);
    };

    const loadCategories = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllCategoryUrl(),
        false
      );
      const result = await response.json();
      setCategories(result);
    };

    const loadPublishers = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllPublisherUrl(),
        false
      );
      const result = await response.json();
      setPublishers(result);
    };

    loadCategories();
    loadAuthors();
    loadPublishers();
  }, []);

  const isFilter = (f) => f === filter;

  const loadBooksByCategory = (category) => {
    const loadBooks = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBooksByCategoryUrl(category),
        false
      );
      const result = await response.json();
      setBooks(result[0].books);
      console.log(result);
    };
    loadBooks();
  };
  const loadBooksByAuthor = (author) => {
    const loadBooks = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBooksByAuthorUrl(author),
        false
      );
      const result = await response.json();
      setBooks(result[0].books);
      console.log(result);
    };
    loadBooks();
  };

  const loadBooksByPublisher = (publisher) => {
    const loadBooks = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBooksByPublisherUrl(publisher),
        false
      );
      const result = await response.json();
      setBooks(result[0].books);
      console.log(result);
    };
    loadBooks();
  };

  return (
    <div className="container__filterMenu">
      <h4>Filtrar por:</h4>
      <br />
      <Button onClick={() => setFilter("category")}>Categorias</Button>
      <Button onClick={() => setFilter("author")}>Autores</Button>
      <Button onClick={() => setFilter("publisher")}>Editoras</Button>

      <br />
      <hr />
      <br />

      <div className="wrapper__filters">
        {isFilter("category") &&
          categories.map((category) => (
            <Button
              key={`category_${category.id}`}
              onClick={() => loadBooksByCategory(category.name)}
            >
              {category.name}
            </Button>
          ))}
        {isFilter("author") &&
          authors.map((author) => (
            <Button
              key={`author_${author.id}`}
              onClick={() => loadBooksByAuthor(author.name)}
            >
              {author.name}
            </Button>
          ))}
        {isFilter("publisher") &&
          publishers.map((publisher) => (
            <Button
              key={`publisher_${publisher.id}`}
              onClick={() => loadBooksByPublisher(publisher.name)}
            >
              {publisher.name}
            </Button>
          ))}
      </div>
    </div>
  );
}

export default FiltersMenu;
