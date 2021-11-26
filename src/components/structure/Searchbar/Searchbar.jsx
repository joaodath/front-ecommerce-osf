import React from "react";
import TextField from "@mui/material";

function Searchbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teste");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        className="search-field"
        name="searchField"
      />
      <input type="text" className="search-btn" value="search" />
    </form>
  );
}

export default Searchbar;
