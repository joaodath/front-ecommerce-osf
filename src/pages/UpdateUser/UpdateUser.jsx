import React, { useEffect, useState } from "react";
import { parseISO, format } from 'date-fns'
import { subHours, addDays } from 'date-fns';
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function UpdateUser(props) {
  const id = props.match.params.id;

  const [user, setUser] = useState(undefined);
  
  console.log("USER: ", user);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdUserUrl(id),
        true
      );

      const results = await response.json();
      console.log("results: ", results);
      setUser(results);
    };

    loadUser();
  }, [id]);

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data_Brasileira = event.target.birthDate.value;
    const data_Americana = data_Brasileira.split('/').reverse().join('-')
    const data_Utc = parseISO(data_Americana)
    const birthDate = subHours(data_Utc, 3).toISOString()
    
    
    const name = event.target.name.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
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
    
    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
      payload,
      true,
      
      );
      
      const body = await response.json();
      console.log("Body:  ", body)
      
      if (response.status === 200) {
        alert("Edição armazenada com sucesso");
        const id = body.id;
        
        // Verifique seus dados
        props.history.push(`/user/view/id/${id}`);
      } else {
        alert("Ops! Algo deu errado!");
      }
    };
    
    
    if (!user) {
      return <div>Loading...</div>;
    }
    
    const dateAmerican = format(parseISO(user.birthDate), "MM-dd-yyyy")
    const dateUtc_M1 = addDays(new Date(dateAmerican), 1).toISOString()
    const dataBrasil_brT =  format(parseISO(dateUtc_M1), "dd-MM-yyyy")
    const dataBrasil_brB = dataBrasil_brT.split('-').join('/')
    
    
    
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
          Edite as Informações
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
                    defaultValue={user.name}
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
                    defaultValue={dataBrasil_brB}
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
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div>
                  <TextField
                    className="contained"
                    type="submit"
                    value="SALVAR"
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
