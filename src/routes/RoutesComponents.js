// import { Switch } from "@mui/material";
import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateUser from "../pages/CreateUser/CreateUser";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import ViewUser from "../pages/ViewUser/ViewUser";
import ViewUserName from "../pages/ViewUserName/ViewUserName";

// import { Book } from "../components/Book/CreateBook";

export const RoutesComponents = () => {
  return (
    <>
      <Route path="/user/create" component={CreateUser} />

      <Route path="/user/view/username" component={ViewUserName} />
      <Route path="/user/view/id" component={ViewUser} />
      <Route path="/user/update" component={UpdateUser} />
      <Route path="/user/delete" component={DeleteUser} />
    </>
  );
};
