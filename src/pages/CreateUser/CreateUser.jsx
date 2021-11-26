import React from "react";
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { parseISO, parse, format } from 'date-fns'
import { subHours, addHours } from 'date-fns';
import { Container } from "@mui/material";
import "./createuser.css";


export default function CreateUser(props) {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data_Brasileira = event.target.birthDate.value;    
    const data_Americana = data_Brasileira.split('/').reverse().join('-')
    const data_Utc = parseISO(data_Americana)
    const birthDate = subHours(data_Utc, 3).toISOString()
    

    const name = event.target.name.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profilePhoto = event.target.profilePhoto.value;
    const cpf = event.target.cpf.value;
    const cep = event.target.cep.value;
    const country = event.target.country.value;
    const state = event.target.state.value;
    const city = event.target.city.value;
    const address = event.target.address.value;
    const phonenumber = event.target.phonenumber.value;

    const payload = {
      name,
      username,
      email,
      password,
      profilePhoto,
      birthDate,
      cpf,
      cep,
      country,
      state,
      city,
      address,
      phonenumber,
    };

    console.log(payload)

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload,
      false,
      console.log("PAYLOAD:  ", payload)
    );

    const body = await response.json();

    if (response.status === 201) {
      alert("Cadastro realizado com sucesso");
      props.history.push(`/`);
    } else {
      alert("Ops! Algo deu errado!");
    }
  };

  return (
    <div className="App">
      <div>
        <Typography
          variant="h4"
          gutterBottom
          margin={8}
          color="#404040"
          component="div"
        >
          Cadastre-se
        </Typography>

        <Container component="section" maxWidth="lg">
          <Box
            component="form"
            onSubmit={handleSubmit}
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
                    className="outlined-helperText"
                    label="NOME COMLETO"
                    name="name"
                    id="name"
                    helperText="Nome sem abreviações"
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
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={7}>
                <div>
                  <TextField
                    required
                    type="text"
                    className="outlined-helperText"
                    label="EMAIL"
                    name="email"
                    id="email"
                    helperText="E-mail completo"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={5}>
                <div>
                  <TextField
                    required
                    type="password"
                    className="outlined-password-input"
                    label="SENHA"
                    name="password"
                    id="password"
                    helperText="Mínimo de 8 caracteres"
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
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div>
                  <TextField
                    className="contained"
                    type="submit"
                    value="CRIAR"
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
}
