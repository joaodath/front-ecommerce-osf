import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

function CheckOut() {
  const { clearCart } = useCart();
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    clearCart();
    setTimeout(() => { setCheckout(true) }, 3000);
  }, []);

  if (!checkout) {
    return (
        <div style={{ minHeight: "100vh", margin: "0 auto", rowGap: "1.8rem" }}>
        <br/>
        <br/>
        <h2>Aguarde um instante...</h2>
        <div><CircularProgress/></div>
      </div>

    )
  } else {

      return (
        <div style={{ minHeight: "100vh", margin: "0 auto", rowGap: "1.8rem" }}>
          <br/>
          <br/>
          <h2>Pedido Realizado!</h2>
          <br/>
          <p>Obrigado pela sua compra.</p>
          <br/>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </div>
      );
  }

}

export default CheckOut;
