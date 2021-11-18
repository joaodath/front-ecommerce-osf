import React from "react";
import { useCart } from "../../../hooks/useCart";

function CartItem({ book }) {
  const { increase, decrease, removeProduct } = useCart();
  return (
    <div className="wrapper__cartItem">
      <div>
        <img src={book.coverImg} alt={`${book.title}'s cover`} style={{width: "10rem"}}/>
      </div>
      <div>
        <p>{book.title}</p>
        <p>{book.quantity}</p>
        <p>R$ {book.price}</p>
      </div>
      <div>
          <button type="button" onClick={()=>increase(book)}>Adicionar</button>
          <button type="button" onClick={()=>decrease(book)}>Remover</button>
          <button type="button" onClick={()=>removeProduct(book)}>Remover Tudo</button>
      </div>
    </div>
  );
}

export default CartItem;
