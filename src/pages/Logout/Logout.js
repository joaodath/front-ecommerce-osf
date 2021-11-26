import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

export default function Logout() {
  useEffect(() => {
    JwtHandler.clearJwt();
    localStorage.setItem("userId", "")
  });

  return <Redirect to="/" />;
}
