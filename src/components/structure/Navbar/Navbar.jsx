import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function Navbar() {
  const { itemCount } = useCart();

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
          <h1>Bookstore</h1>
        </Link>
      </div>
      <div className="wrapper__searchbar">
        <Searchbar />
      </div>
      <div className="wrapper__cartUser" style={{display: "flex", alignItems: "center", columnGap: "1rem"}}>
        <div className="wrapper__shoppingCart">
          <Badge badgeContent={itemCount} color="error">
            <Link to="/cart">
              <ShoppingCartIcon style={{fontSize: "2rem"}}/>
            </Link>
          </Badge>
        </div>
        <div className="wrapper__userBtn">
          <Avatar
          sx={{heigth: "2rem", width: "2.5rem"}}
            src={
              "https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?h=ecfff384&itok=Vhm0RCa3"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
