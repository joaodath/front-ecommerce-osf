import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Api } from "../../Api/Api";

export default function DeleteUser(props) {
  const id = props.match.params.id;

  console.log("props:  ", props);
  const option = props.location.state;
  console.log("option", option);

  const handleDelete = async (event) => {
    if (option === "inative") {
      const response = await Api.buildApiDeleteRequest(
        // Api.deleteUserUrl(id),
        console.log("Estou no Inative")
        // true
      );
    } else if (option === "remove") {
      const response = await Api.buildApiDeleteRequest(
        // Api.deleteUserUrl(id),
        console.log("Estou no Remove")
        // true
      );
    } else if (option === "delete") {
      const response = await Api.buildApiDeleteRequest(
        Api.deleteUserUrl(id),
        console.log("Estou no delete"),
        true
      );

      if (response.status === 200) {
        alert("Usuário deletado com sucesso.");
        //   props.history.push(`/`);
      } else {
        alert(
          "O usuário não foi deletado. O servidor retornou um erro inesperado."
        );
      }

      if (!response) {
        return <div>Loading...</div>;
      }
    }
  };

  return (
    // <div>
    //   <div className="">
    //     Você tem certeza que deseja excluir sua conta?
    //     <br />
    //     <br />
    //     <button className="" onClick={handleDelete}>
    //       Confirmar exclusão
    //     </button>
    //   </div>
    // </div>

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
