import React from "react";
import { Api } from "../../Api/Api";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import './createuser.css'

export default function CreateUser(props) {
  // div*12>label.form__label>input.form__input-text>p

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profilePhoto = event.target.profilePhoto.value;
    const birthDate = event.target.birthDate.value;
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

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload,
      true,
      console.log("PAYLOAD:  ", payload)
    );

    const body = await response.json();

    if (response.status === 201) {
      alert("Cadastro realizado com sucesso");
      const id = body.id;
      props.history.push(`/user/view/id/${id}`);
    } else {
      alert("Ops! Algo deu errado!");
    }
  };

  return (
    <div className="App">
      <div>
        <div>
          <h1>Cadastre-se</h1>
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <form className="form" onSubmit={handleSubmit}> */}
          {/* <div>
          <label className="form__label" htmlFor="name">
          Nome:
          </label>
        </div> */}
          <Grid container>
            <Grid item xs={12}>
              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="NOME COMLETO"
                  name="name"
                  id="name"
                />
              </div>

              {/* <div>
              <label className="form__label" htmlFor="username">
                Nome de Usuário:
                </label>
              </div> */}

              <div>
                <TextField
                  required
                  type="text"
                  className="outlined-helperText"
                  label="NOME DE USUÁRIO"
                  name="username"
                  id="username"
                  helperText="Apenas o nome de usuário."
                />
              </div>

              {/* <div>
              <label htmlFor="email" className="form__label">
              Email:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="EMAIL"
                  name="email"
                  id="email"
                />
              </div>

              {/* <div>
              <label htmlFor="password" className="form__label">
              Senha:
              </label>
            </div> */}

              <div>
                <TextField
                  type="password"
                  className="outlined-password-input"
                  label="SENHA"
                  name="password"
                  id="password"
                  helperText="Mínimo de 8 caracteres"
                />
              </div>

              {/* <div>
              <label htmlFor="profilePhoto" className="form__label">
                Foto de Perfil:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="IMAGEM DE PERFIL"
                  name="profilePhoto"
                  id="profilePhoto"
                  helperText="Insira o link da imagem"
                />
              </div>

              {/* <div>
              <label htmlFor="birthDate" className="form__label">
              Data de Nascimento:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="Data de Nascimento"
                  name="birthDate"
                  id="birthDate"
                  helperText="Formato: DD/MM/YYYY"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* <div>
              <label htmlFor="cpf" className="form__label">
              CPF:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="CPF"
                  name="cpf"
                  id="cpf"
                />
              </div>

              {/* <div>
              <label htmlFor="cep" className="form__label">
              CEP:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="CEP"
                  name="cep"
                  id="cep"
                />
              </div>

              {/* <div>
              <label htmlFor="country" className="form__label">
              País:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="PAÍS"
                  name="country"
                  id="country"
                />
              </div>

              {/* <div>
              <label htmlFor="state" className="form__label">
              Estado:
              </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="ESTADO"
                  name="state"
                  id="state"
                />
              </div>

              {/* <div>
              <label htmlFor="city" className="form__label">
                Cidade:
                </label>
            </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="CIDADE"
                  name="city"
                  id="city"
                />
              </div>

              {/* <div>
              <label htmlFor="address" className="form__label">
                Endereço:
                </label>
            </div> */}

              <div>
                <TextField
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

              {/* <div>
              <label htmlFor="phonenumber" className="form__label">
                Telefone:
                </label>
              </div> */}

              <div>
                <TextField
                  type="text"
                  className="outlined-helperText"
                  label="TELEFONE"
                  name="phonenumber"
                  id="phonenumber"
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
                <TextField className="contained" type="submit" value="CRIAR" />
              </div>
            </Grid>
            {/* </form> */}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
