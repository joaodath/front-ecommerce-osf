import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { Button } from "@mui/material"; 
import "./ViewBook.scss"

export default function ViewBook(props) {
  const id = props.match.params.id;

  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBookByIdUrl(id),
        false
      );
      const result = await response.json();
      setBook(result);
      console.log(result);
    };
    loadBook();
  }, []);

  if (!book) {
    return <div>Loading...</div>
  }

  return (
    <div className="">
      <section className=" detail-container detail-container__header">
        <img src={book.coverImg} alt="" />
        <div className="header-info">
          <h2>{book.title}</h2>
          <p>
            Autor: <span className="blue">{book.author[0].name}</span>
          </p>
          <p>
            Editora:   <span className="blue">{book.publisher[0].name}</span>
          </p>
          <br/>
          <h1>{`R$${book.price}`}</h1>
          <br/>
          <Button variant="contained">Comprar</Button>
        </div>
      </section>
      <section className="detail-container detail-container__sinopsis">
        <h2>Sinopse</h2>
        <p>{book.description}</p>
      </section>
      <section className="detail-container detail-container__list">
        <h2>Ficha Técnica</h2>
        <ul>
          <li>Título: {`"${book.title}"`}</li>
          <li>Autor: {book.author[0].name}</li>
          <li>ISBN13: {book.isbn13}</li>
          <li>ISBN10: {book.isbn10}</li>
          <li>Editora: {book.publisher[0].name}</li>
          <li>Idioma: {book.language}</li>
          <li>Edição: {book.edition}</li>
          <li>Categoria: {book.category[0].name}</li>
        </ul>
      </section>
    </div>
  );
}
