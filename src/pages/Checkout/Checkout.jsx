import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";
import { Api } from "../../Api/Api"
import "./Checkout.scss";

function Checkout() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const loadUser = async () => {
        const response = await Api.buildApiGetRequest(Api.readUserUrl(), true)
        const result = await response.json();
        setUser(result)
      }
      loadUser()

  }, [])

  console.log(user);

  if (!user) {
      return <p>Loading...</p>
  }
  
  return (
    <div className="container__addresses">
        <h3>Endereço de Entrega:</h3>
      <div className="wrapper__address-details"> 
        <p>{user.name}</p>
        <p>{user.address}</p>
        <p>Cidade: {user.city}</p>
        <p>Estado {user.state}</p>
        <p>País: {user.country}</p>
        <p>CEP: {user.cep}</p>
      </div>
    </div>
  );
}

export default Checkout;
