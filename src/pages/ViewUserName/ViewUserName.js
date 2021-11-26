import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LinkButton from "../../components/LinkButton/LinkButton";

export default function ViewUserName(props) {
  const id = props.match.params.id;
  const username = props.match.params.username;




  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByUsernameUserUrl(username),
        true
      );

      const results = await response.json();
   
      setUser(results.json());
    };

    loadUser();
  }, [username]);

  if (!user) {
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
        Confirme as Informações
      </Typography>

      <Container component="section" maxWidth="lg">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { marginBottom: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={7}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-read-only-input"
                  label="NOME COMLETO"
                  name="name"
                  id="name"
                  helperText="Nome sem abreviações"
                  defaultValue={user.name}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={5}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="NOME DE USUÁRIO"
                  name="username"
                  id="username"
                  helperText="Apenas o nome de usuário. Ex: Aninha21"
                  defaultValue={user.username}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="EMAIL"
                  name="email"
                  id="email"
                  helperText="E-mail completo"
                  defaultValue={user.email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="IMAGEM DE PERFIL"
                  name="profilePhoto"
                  id="profilePhoto"
                  helperText="Insira o link da imagem"
                  defaultValue={user.profilePhoto}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="Data de Nascimento"
                  name="birthDate"
                  id="birthDate"
                  helperText="Formato: DD/MM/YYYY"
                  defaultValue={user.birthDate}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="CPF"
                  name="cpf"
                  id="cpf"
                  helperText="Informe apenas os números "
                  defaultValue={user.cpf}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>
                <TextField
                  required
                  type="text"
                  className="filled-textarea"
                  label="ENDEREÇO"
                  multiline
                  name="address"
                  id="address"
                  maxRows={4}
                  helperText="Rua, número, complemento e Bairro "
                  defaultValue={user.address}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="CIDADE"
                  name="city"
                  id="city"
                  helperText="Nome da cidade completo "
                  defaultValue={user.city}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="ESTADO"
                  name="state"
                  id="state"
                  helperText="Nome do estado. Não usar sigla. "
                  defaultValue={user.state}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="PAÍS"
                  name="country"
                  id="country"
                  helperText="Nome do país sem abreviações "
                  defaultValue={user.country}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="CEP"
                  name="cep"
                  id="cep"
                  helperText="Informe apenas os números "
                  defaultValue={user.cep}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="TELEFONE"
                  name="phonenumber"
                  id="phonenumber"
                  helperText="Informe somente os números"
                  defaultValue={user.phonenumber}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Grid>

            <div className="dv__button">
              <LinkButton
                to={"/user/update/" + id}
                className="button button--user"
              >
                EDITAR
              </LinkButton>
            </div>

            <div className="dv__button">
              <LinkButton to={"/"} className="button button--user">
                CONFIRMAR
              </LinkButton>
            </div>

          </Grid>
        </Box>
      </Container>

    </div>
  );
}
