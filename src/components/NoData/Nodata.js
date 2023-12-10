import { Typography } from "@mui/material";
import React from "react";

const Nodata = ({message}) => {
  return (
    <Typography
      style={{
        fontSize: "16px",
        fontWeight: 600,
        color: "#0c3b5e",
        border: "1px solid #0c3b5e",
        borderRadius:"5px",
        height: "269px",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
    {message}
    </Typography>
  );
};

export default Nodata;
