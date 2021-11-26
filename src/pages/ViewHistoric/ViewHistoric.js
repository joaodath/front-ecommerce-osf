import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { Container } from "@mui/material";
import { Grid } from "@material-ui/core";

import LinkButton from "../../components/LinkButton/LinkButton";

import Box from "@mui/material/Box";
import { addDays } from "date-fns";
import { parseISO, format } from "date-fns";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

// import * as css from "../../styles/style.css";

export default function ViewHistoric(props) {
  const username = props.match.params.username;

  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByUsernameUserUrl(),
        true
      );

      const results = await response.json();

      setUser(results);

    };

    loadUser();
  }, []);

  const [buy, setBuy] = useState();

  useEffect(() => {
    const loadBuy = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllUserShoppingHistoryUrl(),
        true
      );

      const results = await response.json();

      setBuy(results);

    };

    loadBuy();
  }, []);

  //   if (!user) {
  //     return <div>Loading...</div>;
  //   }

  //   const dateAmerican = format(parseISO(user.birthDate), "MM-dd-yyyy");
  //   const dateUtc_M1 = addDays(new Date(dateAmerican), 1).toISOString();
  //   const dataBrasil_brT = format(parseISO(dateUtc_M1), "dd-MM-yyyy");
  //   const dataBrasil_brB = dataBrasil_brT.split("-").join("/");

  return (
    <div className="App">
      <Container
        component="section"
        maxWidth="lg"
        justifyContent="space-around"
      >
        <Typography
          variant="h5"
          gutterBottom
          margin={8}
          color="#404040"
          component="div"
        >
          <div>
            <h3>Detalhes da Compra</h3>
          </div>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            textAlign=""
            width="50%"
          >
            <Grid item xs={6} sm={6} textAlign="left">
              <div>Código: </div>
            </Grid>

            <Grid item xs={6} sm={6} textAlign="right">
              {" "}
              userId{" "}
            </Grid>

            <Grid item xs={6} sm={6} textAlign="left">
              <div>Preço Total: </div>
            </Grid>

            <Grid item xs={6} sm={6} textAlign="right">
              {" "}
              couponCodeId{" "}
            </Grid>

            <Grid item xs={6} sm={6} textAlign="left">
              <div>Código do Cupom: </div>
            </Grid>

            <Grid item xs={6} sm={6} textAlign="right">
              {" "}
              couponCodeStr{" "}
            </Grid>

            <Grid item xs={6} sm={6} textAlign="left">
              <div>Cupom code String: </div>
            </Grid>

            <Grid item xs={6} sm={6} textAlign="right">
              {" "}
              discountAmount{" "}
            </Grid>

            <Grid item xs={6} sm={6} textAlign="left">
              <div>Quantidade: </div>
            </Grid>

            <Grid item xs={6} sm={6} textAlign="right">
              {" "}
              discountAmount{" "}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
