import React from "react";
import { Route } from "react-router";
import Cart from "../pages/Cart/Cart";
// import { Book } from "../components/Book/CreateBook";

export const RoutesComponents = () => {
  return (
    <>
      {/* <Route path="book/create" component={CreateBook} /> */}
      <Route path="/cart" component={Cart} />
    </>
  );
};
