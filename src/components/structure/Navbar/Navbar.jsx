import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import { useCart } from "../../../hooks/useCart";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
// import { Api } from "../../../Api/Api";
import useUser from "../../../hooks/useUser";

function Navbar() {
  const { itemCount } = useCart();
  const { user, isLogged, setIsLogged } = useUser();

  // const history = useHistory();
  // setIsLogged(!!JwtHandler.isJwtValid());
  console.log(isLogged);

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };
    window.addEventListener("onJwtChange", handleOnJwtChange);
    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  // const body = undefined;
  // const pass = JwtHandler.getJwt();

  // const loadUser = async () => {
  //   const response = await Api.buildApiGetRequest(Api.loginTestUrl(pass), true);

  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     history.push("/logout");
  //   } else {
  //   }
  // };

  // loadUser();

  return (
    <div
      className="container__navbar"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div className="wrapper__logo">
        <Link to="/">
          <h1>S t u n t z</h1>
        </Link>
      </div>
      <div className="wrapper__searchbar">
        <Searchbar />
      </div>
      <div
        className="wrapper__cartUser"
        style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
      >
        <div className="wrapper__shoppingCart">
          <Badge badgeContent={itemCount} color="error">
            <Link to="/cart">
              <ShoppingCartIcon style={{ fontSize: "2rem" }} />
            </Link>
          </Badge>
        </div>
        <div className="wrapper__userBtn">
          {/* <Link to={isLogged? (`/user/view/id/${user}`) : ('/login')} > */}
            <Avatar
            sx={{ heigth: "2rem", width: "2.5rem" }}
            src={
              "https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?h=ecfff384&itok=Vhm0RCa3"
            }
          />
          {/* </Link> */}
          {isLogged ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
