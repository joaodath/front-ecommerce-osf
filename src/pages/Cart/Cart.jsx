import React from "react";
import { useCart } from "../../hooks/useCart";
import CartProducts from "../../components/structure/CartProducts/CartProducts";
import { Button } from "@mui/material";

function Cart() {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();
  return (
    <div
      className="container__cart"
      style={{
        padding: "3.5rem",
        display: "grid",
        gridTemplateColumns: "1fr, 1fr",
        minHeight: "100vh",
        margin: "3rem 0 1rem 0",
      }}
    >
      <div className="wrapper__cartProducts" style={{ gridColumn: "1/2" }}>
        {cartItems.length > 0 ? (
          <CartProducts />
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>

      <div className="wrapper__cart-details" style={{ gridColumn: "2/3" }}>
        
        <div className="wrapper__cart-sumarize">
          <p>Total Items: {itemCount}</p>
          <h4>Total:</h4>
          <p>{total}</p>
        </div>
        
        <div className="wrapper__buttons">
          <Button variant="outlined" onClick={handleCheckout}>
            CHECKOUT
          </Button>
          <Button variant="contained" onClick={clearCart}>
            CLEAR
          </Button>
        </div>
        </div>
        
        </div>
  );

}

export default Cart;
