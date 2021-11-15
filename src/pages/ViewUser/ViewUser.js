import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";


export default function ViewUser(props) {
    const id = props.match.params.id;
  //   console.log("id: ", id, typeof id);
  //   console.log(props);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdUserUrl(id),
        true
      );

      const results = await response.json();

      setUser(results);
    };

    loadUser();
  }, [id]);

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
        <p> Nome de Usuário: {user.username} </p>
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
        <p> Data de Aniversário: {user.birthDate} </p>
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
      <div>
        <p>Por favor, confirme suas informações:</p>
        <LinkButton to={"/user/update/"+id} >
          EDITAR
        </LinkButton>
        <LinkButton to={"/"} >
          CONFIRMAR
        </LinkButton>         
      </div>
    </div>
  );
}
