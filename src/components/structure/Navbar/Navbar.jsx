import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useCart } from "../../../hooks/useCart";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function Navbar() {
  const { itemCount } = useCart();

  return (
    <div className="row align-items-center">
      <Container component="section" maxWidth="lg">
          <div
            className="container__navbar"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={4} sm={7}>
              <div className="container-wrapper__logo">
                <div className="wrapper__logo">
                  <Link to="/">
                    <h1>Bookstore</h1>
                  </Link>
                </div>
              </div>
            </Grid>

            {/* <Grid item xs={6} sm={7}> */}

            <div className="wrapper__searchbar">
              {/* <Searchbar /> */}
            </div>

            {/* </Grid> */}

              <div
                className="wrapper__cartUser"
                style={{
                  display: "flex",
                  alignItems:"flex-end" ,
                  columnGap: "1rem",
                }}
              >
                <Grid item xs={2} sm={7}>
                <div className="wrapper__shoppingCart">
                  <Badge badgeContent={itemCount} color="error">
                    <Link to="/cart">
                      <ShoppingCartIcon style={{ fontSize: "2rem" }} />
                    </Link>
                  </Badge>
                </div>

                <div className="wrapper__userBtn">
                  <Avatar
                    sx={{ heigth: "2rem", width: "2.5rem" }}
                    src={
                      "https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?h=ecfff384&itok=Vhm0RCa3"
                    }
                  />
                </div>
            </Grid>
              </div>
        </Grid>
          </div>
      </Container>
    </div>
  );
}

export default Navbar;
