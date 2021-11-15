import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";

export default function UpdateUser(props) {
  const id = props.match.params.id;
  // const id = 2;
  console.log("ID: ", id);
  // div*12>label.form__label>input.form__input-text>p

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

    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
      payload,
      true,
      // console.log("PAYLOAD:  ", payload)
    );

    const body = await response.json();
    console.log("Body:  ", body)

    if (response.status === 200) {
      alert("Cadastro realizado com sucesso");
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
            defaultValue={user.name}
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
            defaultValue={user.username}
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
            defaultValue={user.email}
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
            defaultValue={user.password}
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
            defaultValue={user.profilePhoto}
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
            defaultValue={user.birthDate}
          />
        </div>
        <div>
          <label htmlFor="cpf" className="form__label">
            CPF:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="cpf"
            id="cpf"
            defaultValue={user.cpf}
          />
        </div>

        <div>
          <label htmlFor="cep" className="form__label">
            CEP:
          </label>
        </div>

        <div>
          <input
            type="text"
            className="form__input-text"
            name="cep"
            id="cep"
            defaultValue={user.cep}
          />
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
            defaultValue={user.country}
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
            defaultValue={user.state}
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
            defaultValue={user.city}
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
            defaultValue={user.address}
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
            defaultValue={user.phonenumber}
          />
        </div>

        <div>
          <input className="form__submit" type="submit" value="SALVAR" />
        </div>
      </form>
    </div>
  );
}
