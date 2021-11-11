import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";

export default function ViewUserName(props) {
  //   const id = props.match.params.username;
  const username = "Fael";
  //   console.log("id: ", id, typeof id);
  //   console.log(props);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByUsernameUserUrl(username),
        true
      );

      const results = await response.json();

      setUser(results);
    };

    loadUser();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log("userView:  ", user);

  return (
    <div className="item">
        
      <div>
        <p> Nome: {user.name} </p>
      </div>

      <div>
        <p> Nome de usuário: {user.username} </p>
      </div>

      <div>
        <p> Email: {user.email} </p>
      </div>

      {/* <div>
        <p> Nome: {user.password} </p>
      </div> */}

      <div>
        <p> Imagem de Perfil: {user.profilePhoto} </p>
      </div>

      <div>
        <p> Data de Nascimento: {user.birthDate} </p>
      </div>

      <div>
        <p> CPF: {user.cpf} </p>
      </div>

      <div>
        <p> CEP: {user.cep} </p>
      </div>

      <div>
        <p> País: {user.country} </p>
      </div>

      <div>
        <p> Estado: {user.state} </p>
      </div>

      <div>
        <p> Cidade: {user.city} </p>
      </div>

      <div>
        <p> Endereço: {user.address} </p>
      </div>

      <div>
        <p> Telefone: {user.phonenumber} </p>
      </div>
    </div>
  );
}
