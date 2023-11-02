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
          marginRight: "70px",
        }}
      >
        BOOKING
      </Typography>
      <Box display="flex" justifyContent={"space-between"}>
        <TextField defaultValue={"Book no"} />
        <TextField defaultValue={"Quantity"} />
      </Box>
      <Box display="flex" justifyContent={""}>
        <TextField defaultValue={"Any"} />
        <TextField defaultValue={"Total"} />
      </Box>
      <Button variant="contained">Pre Book</Button>
    </Box>
  );
};

export default Booking;
