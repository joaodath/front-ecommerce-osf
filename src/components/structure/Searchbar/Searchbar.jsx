import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Searchbar() {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchKey);
  };

  return (
    <div
      className="searchbar"
      style={{ display: "flex", alignContent: "center", alignItems: "center" }}
    >
      <TextField
        className="search-field"
        id="searchField"
        name="searchField"
        placeholder="Busque pelo Título"
        onChange={(e) => setSearchKey(e.target.value)}
        sx={{ width: "30rem" }}
      />
      <Button onClick={handleSearch} sx={{ height: "2rem", width: "2rem" }}>
        <SearchIcon sx={{ height: "2rem", width: "2rem" }} />
      </Button>
    </div>
  );
}

export default Searchbar;
