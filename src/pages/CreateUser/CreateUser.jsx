import React from "react";
import { Api } from "../../api/Api";

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
      
      // Verifique seus dados
      //props.history.push(`/user/view/${id}`);
      
    } else {
      alert("Ops! Algo deu errado!");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="name">
            Nome:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="username">
            Nome de Usuário:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="username"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email" className="form__label">
            Email:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password" className="form__label">
            Senha:
          </label>
        </div>

        <div>
          <input
            type="password"
            className="form__input-text"
            name="password"
            id="password"
          />
        </div>

        <div>
          <label htmlFor="profilePhoto" className="form__label">
            Foto de Perfil:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="profilePhoto"
            id="profilePhoto"
          />
        </div>

        <div>
          <label htmlFor="birthDate" className="form__label">
            Data de Nascimento:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="birthDate"
            id="birthDate"
          />
        </div>
        <div>
          <label htmlFor="cpf" className="form__label">
            CPF:
          </label>
        </div>

        <div>
          <input type="text" className="form__input-text" name="cpf" id="cpf" />
        </div>

        <div>
          <label htmlFor="cep" className="form__label">
            CEP:
          </label>
        </div>

        <div>
          <input type="text" className="form__input-text" name="cep" id="cep" />
        </div>

        <div>
          <label htmlFor="country" className="form__label">
            País:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="country"
            id="country"
          />
        </div>

        <div>
          <label htmlFor="state" className="form__label">
            Estado:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="state"
            id="state"
          />
        </div>

        <div>
          <label htmlFor="city" className="form__label">
            Cidade:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="city"
            id="city"
          />
        </div>

        <div>
          <label htmlFor="address" className="form__label">
            Endereço:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="address"
            id="address"
          />
        </div>

        <div>
          <label htmlFor="phonenumber" className="form__label">
            Telefone:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="phonenumber"
            id="phonenumber"
          />
        </div>

        <div>
          <input className="form__submit" type="submit" value="CRIAR" />
        </div>
      </form>
    </div>
  );
}

// {

//   "name": "Paulo",
//   "username": "Moreira Filho",
//   "email": "paulo@gmail.com",
//   "password": "Ab123@",
//   "profilePhoto": "pl22",
//   "birthDate": "2016-07-16T19:20:30+05:30",
//   "cpf": "11221122112",
//   "cep": "12312312",
//   "country": "Brasil",
//   "state": "Minas Gerais",
//   "city": "Piraúba",
//   "address": "Rua do Ouvidor, 21 - Mineira",
//   "phonenumber": "27978789696"

// }
