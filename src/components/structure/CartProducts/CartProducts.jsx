import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../../hooks/useCart";

function CartProducts() {
  const { cartItems } = useCart();

  return (
    <div className="container__cartItems">
      {cartItems.map((book) => (
        <CartItem key={`bookId_${book.id}`} book={book} />
      ))}
    </div>
  );
}

export default CartProducts;
