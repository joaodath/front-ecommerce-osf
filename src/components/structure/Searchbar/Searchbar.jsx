import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Api } from "../../../Api/Api";

function Searchbar() {
  const [searchKey, setSearchKey] = useState("");
  const [book, setBook] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const loadBook = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBookByTitle(searchKey),
        false
      );
      const result = await response.json();
      setBook(...result);
    };
    loadBook();
    console.log(book.id)

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
