import React from "react";
import { Route } from "react-router";
import  Home  from "../pages/Home/Home";
import CreateUser from "../pages/CreateUser/CreateUser";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import ViewUser from "../pages/ViewUser/ViewUser";
import ViewUserName from "../pages/ViewUserName/ViewUserName";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import ManagerUser from "../pages/Managet/ManagerUser";
import InativeUser from "../pages/InativeCreate/InativeUser";
import DeleteSoftUser from "../pages/DeleteSoftUser/DeleteSoftUser";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import BrowseBooks from "../pages/BrowseBooks/BrowseBooks";
// import { Book } from "../components/Book/CreateBook";

export const RoutesComponents = () => {
  return (
    <>

      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />


      <Route path="/user/create" component={CreateUser} />
      <Route path="/user/update/:id" component={UpdateUser} />
      <Route path="/user/view/id/:id" component={ViewUser} />
      <Route path="/user/manager/:id" component={ManagerUser} />
      <Route path="/user/view/username/:username" component={ViewUserName} />
      <Route path="/user/inative/:id" component={InativeUser} />
      <Route path="/user/remove/:id" component={DeleteSoftUser} />
      <Route path="/user/delete/:id" component={DeleteUser} />
      {/* <Route path="book/create" component={CreateBook} /> */}
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/browsebooks" component={BrowseBooks}/>
    </>
  );
};