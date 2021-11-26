import React, { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import CartProducts from "../../components/structure/CartProducts/CartProducts";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Api } from "../../Api/Api";
import useUser from "../../hooks/useUser";
import "./Cart.scss"

function Cart() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readUserUrl(), true);
      const result = await response.json();
      setUser(result);
    };
    loadUser();
  }, []);

  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();

  if (!user) {
    return <p>Loading...</p>;
  }

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
        {cartItems.length > 0 ? <CartProducts /> : <div>Carrinho Vazio</div>}
      </div>

      <div className="wrapper__cart-details" style={{ gridColumn: "2/3" }}>
        <div className="wrapper__cart-sumarize" style={{ rowGap: "1.5rem" }}>
          <p>Total Items: {itemCount}</p>
          <h4>Total:</h4>
          <p>{total}</p>
        </div>

        <div
          className="wrapper__buttons"
          style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
        >
          <Link to="checkout">
            <Button variant="outlined" sx={{ width: "10rem" }}>
              CHECKOUT
            </Button>
          </Link>
          <Link>
            <Button
              variant="contained"
              onClick={clearCart}
              sx={{ width: "10rem" }}
            >
              Limpar
            </Button>
          </Link>
        </div>
      </div>
      <div className="container__addresses">
        <h4>Endereço de Entrega:</h4>
        <div className="wrapper__address-details">
          <p>{user.name}</p>
          <p>{user.address}</p>
          <p>Cidade: {user.city}</p>
          <p>Estado {user.state}</p>
          <p>País: {user.country}</p>
          <p>CEP: {user.cep}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
