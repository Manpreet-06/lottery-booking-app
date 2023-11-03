import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Booking = () => {
  return (
    <Box>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#003F63",
          marginRight: "30px",
          marginBottom: "20px",
        }}
      >
        BOOKING
      </Typography>
      <Box display="flex" justifyContent={"space-between"}>
        <TextField
          placeholder={"Book no"}
          style={{
            width: "150px",
            height: "56px",
            borderRadius: "10px",
            border: "1px solid #003F63",
            color: "#C4C4C4",
            marginBottom: "40px",
          }}
        />
        <TextField
          placeholder={"Quantity"}
          style={{
            width: "150px",
            height: "56px",
            borderRadius: "10px",
            border: "1px solid #003F63",
            color: "#C4C4C4",
          }}
        />
      </Box>
      <Box display="flex" justifyContent={"space-between"}>
        <TextField
          placeholder={"Any"}
          style={{
            width: "150px",
            height: "56px",
            borderRadius: "10px",
            border: "1px solid #003F63",
            color: "#C4C4C4",
          }}
        />
        <TextField
          placeholder={"Total"}
          style={{
            width: "150px",
            height: "56px",
            borderRadius: "10px",
            border: "1px solid #003F63",
            color: "#C4C4C4",
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{
          width: "280px",
          height: "50px",
          background: "#003F63",
          borderRadius: "10px",
          marginTop: "40px",
        }}
      >
        Pre Book
      </Button>
    </Box>
  );
};

export default Booking;
