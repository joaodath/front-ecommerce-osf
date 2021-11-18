import React, { useEffect, useState } from "react";
import Navbar from "../../structure/Navbar/Navbar";
import { Api } from "../../../Api/Api";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };
    window.addEventListener("onJwtChange", handleOnJwtChange);
    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  console.log("IsLogged", JwtHandler.getJwt());

  // const body = undefined;
  const pass = JwtHandler.getJwt();

  const loadUser = async () => {
    const response = await Api.buildApiGetRequest(Api.loginTestUrl(pass), true);

    const body = await response.json();

    if (response.status !== 200) {
      history.push("/logout");
    } else {
    }
  };

  loadUser();

  return (
        <div className="container__header" style={{ margin: "2rem 0 .5rem 0" }}>
      <Navbar />
    </div>
    <header className="header">
      <br />
      <Link to="/">Home</Link>
      <br />

      {isLogged ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <br />
      <br />
    </header>
  );
}