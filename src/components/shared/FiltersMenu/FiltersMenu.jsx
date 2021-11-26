import React, { useEffect, useState } from "react";
import useBooks from "../../../hooks/useBooks";
import { Api } from "../../../Api/Api";
import { Button } from "@mui/material";
import "./FiltersMenu.scss";

function FiltersMenu(props) {
  const { books, setBooks } = useBooks();
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

  return (
    <div className="container__filterMenu">
      <h3>Selecione um Filtro:</h3>
      <Button onClick={() => setFilter("category")}>Categorias</Button>
      <Button onClick={() => setFilter("author")}>Autores</Button>
      <Button onClick={() => setFilter("publisher")}>Editoras</Button>
      
      <hr />

      <div className="wrapper__filters">
        {isFilter("category") &&
          categories.map((category) => (
            <Button key={`category_${category.id}`}>{category.name}</Button>
          ))}
        {isFilter("author") &&
          authors.map((author) => (
            <Button key={`author_${author.id}`}>{author.name}</Button>
          ))}
        {isFilter("publisher") &&
          publishers.map((publisher) => (
            <Button key={`publisher_${publisher.id}`}>{publisher.name}</Button>
          ))}
      </div>

      {/* <div className="wrapper__filters">
        {authors.map((author) => (
          <Button key={`author_${author.id}`}>{author.name}</Button>
        ))}
      </div>

      <div className="wrapper__filters">
        {publishers.map((publisher) => (
          <Button key={`publisher_${publisher.id}`}>{publisher.name}</Button>
        ))}
      </div> */}
    </div>
  );
}

export default FiltersMenu;
