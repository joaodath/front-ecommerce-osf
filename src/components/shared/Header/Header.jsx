import React from "react";
import MenuButton from "../../structure/MenuButton/MenuButton";
import HeaderBar from "./HeaderBar";
import Navbar from "../../structure/Navbar/Navbar";

function Header() {
  return (
    <div className="container__header" style={{ margin: "2rem 0 .5rem 0" }}>
      <Navbar />
      {/* <HeaderBar /> */}
      <MenuButton />
    </div>
  );
}

export default Header;
