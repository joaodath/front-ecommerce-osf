import React from "react";
import { Api } from "../../api/Api";

export default function DeleteUser(props) {
  //   const id = props.match.params.id;
  const id = 12;
  console.log("id:  ", id);

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteUserUrl(id),
      true
    );

    if (response.status === 200) {
      alert("Usuário deletado com sucesso.");
      //   props.history.push(`/`);
    } else {
      alert(
        "O usuário não foi deletado. O servidor retornou um erro inesperado."
      );
    }

    if (!response) {
      return <div>Loading...</div>;
    }

    console.log("RESPONSE:  ", response)

  };


  return (
    <div>
      <div className="">
        Você tem certeza que deseja excluir sua conta?
        <br />
        <br />
        <button className="" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
