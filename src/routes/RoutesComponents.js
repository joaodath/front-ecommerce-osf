import React from "react";
import { Route } from "react-router";
import {Home} from "../pages/Home/Home"
import CreateUser from "../pages/CreateUser/CreateUser";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import ViewUser from "../pages/ViewUser/ViewUser";
import ViewUserName from "../pages/ViewUserName/ViewUserName";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import ManagerUser from "../pages/Managet/ManagerUser";
import InativeUser from "../pages/InativeUser/InativeUser";
import DeleteSoftUser from "../pages/DeleteSoftUser/DeleteSoftUser";
import Cart from "../pages/Cart/Cart";
//import CheckOut from "../pages/CheckOut/CheckOut";
import BrowseBooks from "../pages/BrowseBooks/BrowseBooks";
import ViewBook from "../pages/ViewBook/ViewBook";

import ViewHistoric from "../pages/ViewHistoric/ViewHistoric";
// import { Book } from "../components/Book/CreateBook";

export const RoutesComponents = () => {
  return (
    <>

      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />


      <Route path="/user/create" component={CreateUser} />
      <Route path="/user/update/:username" component={UpdateUser} />
      <Route path="/user/view/:username" component={ViewUser} />
      <Route path="/user/manager/:username" component={ManagerUser} />

      <Route path="/user/inative/:username" component={InativeUser} />
      <Route path="/user/remove/:usernane" component={DeleteSoftUser} />
      <Route path="/user/delete/:username" component={DeleteUser} />



      <Route path="/user/history/:username" component={ViewHistoric} />

  

      {/* <Route path="book/create" component={CreateBook} /> */}
      <Route path="/cart" component={Cart} />
      {/* <Route path="/checkout" component={CheckOut} /> */}
      <Route path="/browsebooks" component={BrowseBooks}/>
      <Route path="/viewbook/:id" component={ViewBook} />
    </>
  );
};