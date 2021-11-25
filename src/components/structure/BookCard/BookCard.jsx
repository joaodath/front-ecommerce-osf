import React from "react";
import { useCart } from "../../../hooks/useCart";
import { Button } from "@mui/material";
import "./BookCard.scss";

function BookCard({ book }) {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (book) => !!cartItems.find((item) => item.id === book.id);

  return (
    <div className="container__bookCard" style={{ maxWidth: "12rem" }}>
      <p>
        <img
          src={book.coverImg}
          alt={`${book.title}'s cover`}
          style={{ width: "10rem" }}
        />
      </p>
      <p>{book.title}</p>
      <p>Preço: R$ {book.price}</p>

      {isInCart(book) && (
        <Button variant="outlined" onClick={() => increase(book)}>Adicionar + 1</Button>
      )}

      {!isInCart(book) && (
        <Button variant="outlined" onClick={() => addProduct(book)}>
          Adicionar
        </Button>
      )}
      <Button variant="contained">Detalhes</Button>
    </div>
  );
}

export default BookCard;
