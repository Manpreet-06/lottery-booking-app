import { Box, Typography } from "@mui/material";
import React from "react";

const PrintPdf = ({ placeOrderData }) => {
  console.log(placeOrderData);
  return (
    <div style={{ padding: "20px" }}>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Invoice</Typography>
        <Typography>Invoice no</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Date</Typography>
        <Typography>12/11/2023</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>bookNumber</Typography>
        <Typography>{placeOrderData?.booknumber}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Page Number</Typography>
        <Typography>{placeOrderData?.pageNumber}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Quantity</Typography>
        <Typography>{placeOrderData?.quantity}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Amount</Typography>
        <Typography>{placeOrderData?.amount}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>Order Id</Typography>
        <Typography>{placeOrderData?.orderId}</Typography>
      </Box>
    </div>
  );
};

export default PrintPdf;
