import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

export default function ManagerUser(props) {
  //   const id = props.match.params.id;
  const id = props.match.params.id;
 

  const handleInative = async (event) => {
    event.preventDefault();
    const option = "inative";
    console.log("Manager", option)
    props.history.push(`/user/inative/${id}`, option);
  };

  const handleRemove = async (event) => {
    event.preventDefault();
    const option = "remove";
    props.history.push(`/user/remove/${id}`, option);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const option = "delete";
    props.history.push(`/user/delete/${id}`, option);
  };

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Typography
        variant="h4"
        gutterBottom
        margin={8}
        color="#404040"
        component="div"
      >
        O que você deseja fazer?
      </Typography>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginBottom: 3, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Container component="section" maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            marginBottom="30px"
          >
            <Grid item xs={12} sm={6} className="App__option-delete">
              Deseja desabilitar temporáriamente o seu cadastro?
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button
                className="manager__deleted"
                onClick={handleInative}
                variant="contained"
                component="button"
                size="small"
              >
                INATIVAR
              </Button>
            </Grid>

            <br />
            <Grid item xs={12} sm={6} className="App__option-delete">
              Deseja remover os seus dados?
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button
                className="manager__deleted"
                onClick={handleRemove}
                variant="contained"
                component="button"
                size="small"
              >
                Remover
              </Button>
            </Grid>

            <br />
            <Grid item xs={12} sm={6} className="App__option-delete">
              Deseja apagar a sua conta?
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button
                className="manager__deleted"
                onClick={handleDelete}
                variant="contained"
                component="button"
                size="small"
              >
                DELETAR
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
