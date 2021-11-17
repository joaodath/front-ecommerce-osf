import React from "react";
import { Button } from "@mui/material";

export default function CarouselItem(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.item.image})`,
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        alignContent:"center",
        alignItems: "center",
        justifyContent: "end",
        color: "white"
      }}
    >
      <h2>{props.item.title}</h2>
      <Button>Link</Button>

    </div>
  );
}
