import React from "react";
import { Link } from "react-router-dom";
import { Api } from "../../Api/Api";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import useUser from "../../hooks/useUser";
import "./login.css";

// import logo from "../../assets/images/logo.png";

export default function Login(props) {
  const { user, setUser } = useUser();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const payload = {
      username,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 201) {
      const pass = body.access_token;
      JwtHandler.setJwt(pass);
      const usernameId = JwtHandler.getJwtPayload().username;
      localStorage.setItem("userId", usernameId)
      props.history.push(`/`);
    } else {
      // Implementar
    }
  };

  return (
    <div>
      <form className="form__login" onSubmit={handleSubmit}>
        <div style={{ margin: "0 0 3rem 0" }}>
          <h2 style={{ fontFamily: "Montserrat" }}>Login</h2>
          {/* <img src={logo} className="img__logo__login" /> */}
        </div>

        <div>
          <label className="form__label__login" htmlFor="username">
            Nome de Usuário:
          </label>
        </div>

        <div>
          <input
            className="form__input-text__login"
            type="text"
            id="username"
            name="username"
          />
        </div>

        <div>
          <label className="form__label__login" htmlFor="password">
            Password:
          </label>
        </div>

        <div>
          <input
            className="form__input-text__login"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <input
            className="form__submit__button--login"
            type="submit"
            value="LOGIN"
          />
        </div>
        <div>
          <Link to="/user/create">
            <button className="form__submit__button--login" type="submit">
              {" "}
              CRIAR USUÁRIO{" "}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
