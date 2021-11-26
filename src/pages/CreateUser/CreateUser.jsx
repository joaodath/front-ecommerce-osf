import React, { useState } from "react";
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { parseISO } from "date-fns";
import { subHours } from "date-fns";
import { Container } from "@mui/material";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import { cpf } from "cpf-cnpj-validator";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, FormHelperText } from "@mui/material";
import { LocalLaundryService } from "@material-ui/icons";

import "./createuser.css";



export default function CreateUser(props) {


  const validateCPF = (num) => {
    
    const auxNum = cpf.isValid(num);
    if (auxNum === true) {
      return num;
    } else {
 
    }
  };


  const [adress, setAdress] = useState(undefined);
  const [cep, setCep] = useState(undefined);
  
  

  const handleCEP = async (event, value) => {
    event.preventDefault();

    const cep = document.querySelector("#cep").value;
    
    setCep(cep)
    const payload = {
      cep,
    };

    const loadAdress = async () => {
      const response = await Api.buildApiPostRequest(
        Api.cepUrl(),
        payload,
        true
      );

      const results = await response.json();
        console.log("CEP: ", results)
      setAdress(results);
    };
    loadAdress();
  };
  
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate()
    let num = event.target.cpf.value;
    const cpf = validateCPF(num);

    //DATA DE NASCIMENTO
    const data_Brasileira = event.target.birthDate.value;
    const data_Americana = data_Brasileira.split("/").reverse().join("-");
    const data_Utc = parseISO(data_Americana);
    
    const birthDate = subHours(data_Utc, 3).toISOString();

    const name = event.target.name.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profilePhoto = event.target.profilePhoto.value;

   
    const country = event.target.country.value;
    const state = event.target.state.value;
    const city = event.target.city.value;
    const address = event.target.address.value;
    const phonenumber = event.target.phonenumber.value;
    const neighborhood = event.target.neighborhood.value;

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
      neighborhood
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload
      // true
    );

    const body = await response.json();

   

    if (response.status === 201) {
      

      const payload = {
        username,
        password,
      };

      const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);
      const body = await response.json();

      if (response.status === 201) {
        const pass = body.access_token;
        JwtHandler.setJwt(pass);
        props.history.push(`/user/view/${username}`);
      } else {
        alert("Ops! Algo deu errado!");
      }
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
                    label="NOME COMPLETO"
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

              {/* CPF ***********************************************************/}

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





              {/* <Container component="section" maxWidth="lg" justifyContent="center"> */}
              <Box
              width="70%"
              // justifyContent="center"
                component="form"
                sx={{
                  "& .MuiTextField-root": { marginBottom: 3, width: "100%" },
                  // "& .css-8wqzlf-MuiGrid-root": {width: "100%"}
                  
                }}
                noValidate
                autoComplete="off"
                
              >
                  <Grid container spacing={1} justifyContent="center" >
                <Grid item xs={12} sm={6} >
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

                <Grid item xs={12} sm={6} alignItems="center">
                  <Button
                    className="manager__cep"
                    onClick={handleCEP}
                    variant="contained"
                    component="button"
                    size="large"
                  >
                    BUSCAR CEP
                  </Button>
                </Grid>
                </Grid>
              </Box>
              {/* </Container> */}







              <Grid item xs={12} sm={12}>
                <div>
                  <TextField
                    required
                    type="text"
                    className="outlined-required"
                    label="ENDEREÇO"
                    multiline
                    name="address"
                    id="address"
                    maxRows={4}
                    defaultValue={adress !== undefined ? adress.logradouro : ''}
                    InputLabelProps={{ shrink: true }}                    
                    helperText="Rua, número e complemento "

                  />
                </div>
              </Grid>


              <Grid item xs={12} sm={4}>
                <div>
                  <TextField
                    required
                    type="text"
                    className="outlined-required"
                    label="BAIRRO"
                    name="neighborhood"
                    id="neighborhood"
                    multiline
                    helperText="Bairro sem abreviações "
                    defaultValue={adress !== undefined ? adress.bairro : ''}
                    InputLabelProps={{ shrink: true }}

                  />
                </div>
              </Grid>



              <Grid item xs={12} sm={4}>
                <div>
                  <TextField
                    required
                    type="text"
                    className="outlined-required"
                    label="CIDADE"
                    name="city"
                    id="city"
                    multiline
                    helperText="Nome da cidade completo "
                    defaultValue={adress !== undefined ? adress.localidade : ''}
                    InputLabelProps={{ shrink: true }}

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
                    multiline
                    helperText="Informe a sigla."
                    defaultValue={adress !== undefined ? adress.uf  : ''}
                    InputLabelProps={{ shrink: true }}

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
                    helperText="País sem abreviações "
                  />
                </div>
              </Grid>
<br/>

              <Grid item xs={12} sm={5}>
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
                    id="onSub"
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
