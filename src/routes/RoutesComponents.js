import React from "react";
import { Route } from "react-router";
import { Home } from "../pages/Home/Home";
import CreateUser from "../pages/CreateUser/CreateUser";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import ViewUser from "../pages/ViewUser/ViewUser";
import ViewUserName from "../pages/ViewUserName/ViewUserName";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
// import Books from "../pages/Books/Books";
// import ViewCart from "../pages/ViewCart/ViewCart";
// import { Book } from "../components/Book/CreateBook";

export const RoutesComponents = () => {
  return (
    <>
      {/* <Route path="book/create" components={CreateBook} /> */}
      {/* <Route path="/books" component={Books}/>  */}
      {/* <Route path="/cart" component={ViewCart}/>  */}

      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />


      <Route path="/user/create" component={CreateUser} />
      <Route path="/user/update/:id" component={UpdateUser} />
      <Route path="/user/view/id/:id" component={ViewUser} />
      <Route path="/user/view/username/:username" component={ViewUserName} />
      <Route path="/user/delete/:id" component={DeleteUser} />
    </>
  );
};