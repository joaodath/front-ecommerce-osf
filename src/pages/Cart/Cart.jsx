import React from "react";
import { useCart } from "../../hooks/useCart";
import CartProducts from "../../components/structure/CartProducts/CartProducts";

function Cart() {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();
  return (
    <div>
      <h3>Carrinho</h3>
      <div className="wrapper__cartProducts">
        {cartItems.length > 0 ? (
          <CartProducts />
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
      <div className="wrapper__cartDetails">
        <p>Total Items: {itemCount}</p>
        <h4>Total:</h4>
        <p>{total}</p>
      </div>
      <button type="button" onClick={handleCheckout}>
        CHECKOUT
      </button>
      <button type="button" onClick={clearCart}>
        CLEAR
      </button>
    </div>
  );
}

export default Cart;
