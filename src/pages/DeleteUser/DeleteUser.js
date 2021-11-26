import { Container, Grid, TextField, Typography } from "@mui/material";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import { Box } from "@mui/system";
import React from "react";
import { Api } from "../../Api/Api";

export default function DeleteUser(props) {
  const username = props.match.params.username;

  const option = props.location.state;
 

  const handleDelete = async (event) => {
    event.preventDefault();
   
      const response = await Api.buildApiDeleteRequest(
        Api.deleteUserUrl(username),
        true
      );


      if (response.status === 200) {
        alert("Usuário deletado com sucesso.");
        JwtHandler.clearJwt();
      
      } else {
        alert(
          "Usuário não deletado. O servidor retornou um erro inesperado."
        );
      }

      if (!response) {
        return <div>Loading...</div>;
      }
    
  };

  return (


    <div className="App">
      <Typography
        variant="h4"
        gutterBottom
        margin={8}
        color="#404040"
        component="div"
      >
        Excluir Conta:
      </Typography>

      <Box
        component="form"
        onSubmit={handleDelete}
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
              Tem certeza que deseja deletar essa conta?
            </Grid>

            <Grid item xs={12} sm={8}>
              <div>
                <TextField
                  id="onDelete"
                  className="contained"
                  type="submit"
                  value="DELETAR"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
