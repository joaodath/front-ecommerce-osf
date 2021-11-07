import React from "react";
import { CartItem } from "../CartItem/CartItem";
import { useCart } from "../../../hooks/useCart";

function CartProducts() {
  const { cartItems } = useCart();

  return (
    <div className="container__cartItems">
      {cartItems.map((product) => (
        <CartItem key={`bookId_${product.book.id}`} product={product} />
      ))}
    </div>
  );
}

export default CartProducts;
