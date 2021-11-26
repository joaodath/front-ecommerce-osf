import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";

function Searchbar() {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchKey);
  };

  return (
    <div className="default-search">  
    <Container component="section" maxWidth="lg">    
      <div
        id="searchbar"
        className="searchbar"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignContent: "center",
          alignItems: "center",
          position: "relative",
          display: "block",     
        }}
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
          <SearchIcon sx={{ height: "2rem", width: "2rem" }} id="searchIcon" />
        </Button>        
      </div>
      </Container>
    </div>
  );
}

export default Searchbar;
