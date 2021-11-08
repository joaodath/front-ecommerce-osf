import React from "react";
import { useCart } from "../../../hooks/useCart";

function BookCard({ book }) {
  const { addProduct } = useCart();

  return (
    <div className="container__bookCard">
      <p><img src={book.coverImg} alt={`${book.title}'s cover`} style={ {width: "10rem"} }/></p>
      <p>{book.title}</p>
      <p>R$ {book.price}</p>
      <button type="button" onClick={() => addProduct(book)}>
        Adicionar
      </button>
    </div>
  );
}

export default BookCard;
