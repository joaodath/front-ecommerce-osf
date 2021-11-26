import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import Button from "@mui/material/Button";

export default function InativeUser(props) {

  const id = props.match.params.id;

  const [user, setUser] = useState(undefined);
 

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

  const handleInative = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;

    
    
    if (username === user.username) {
      
      const payload = {
        username,
      };
      
      const response = await Api.buildApiPatchRequest(
        Api.inativeUserUrl(username),
        payload,
        true
        );

        
            
      
      if (response.status === 200) {
        alert("Usuário inativado.");
        JwtHandler.clearJwt();
       

      } 

      if (!response) {
        return <div>Loading...</div>;
      }

    } else {
      alert("Ops! Algo deu errado. O servidor retornou um erro inesperado.");
    }


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
        Inativar conta:
      </Typography>

      <Box
        component="form"
        onSubmit={handleInative}
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
            <Grid item xs={12} sm={8} className="App__option-delete">
              Informe o nome de usuário:
            </Grid>

            <Grid item xs={12} sm={8}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="NOME DE USUÁRIO"
                  name="username"
                  id="username"
                  helperText="Nome de usuário. Ex: Aninha21"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <TextField
                  id="onDelete"
                  className="contained"
                  type="submit"
                  value="INATIVAR"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
