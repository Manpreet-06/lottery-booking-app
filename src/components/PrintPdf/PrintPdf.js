import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: 5,
  background: "#fff",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PrintPdf = ({ placeOrderData, open, handleClose }) => {
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "userdata",
  });
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <div
          style={{ padding: "20px", ...style, width: 400 }}
          ref={componentPDF}
        >
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Invoice</Typography>
            <Typography style={{ color: "#0c3b5e" }}>Invoice no</Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Date</Typography>
            <Typography style={{ color: "#0c3b5e" }}>{formattedDate}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>bookNumber</Typography>
            <Typography style={{ color: "#0c3b5e" }}>
              {placeOrderData?.bookNumber}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Page Number</Typography>
            <Typography style={{ color: "#0c3b5e" }}>
              {placeOrderData?.pageNumber}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Quantity</Typography>
            <Typography style={{ color: "#0c3b5e" }}>
              {placeOrderData?.quantity}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Amount</Typography>
            <Typography style={{ color: "#0c3b5e" }}>
              {placeOrderData?.amount}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>Order Id</Typography>
            <Typography style={{ color: "#0c3b5e" }}>
              {placeOrderData?.orderId}
            </Typography>
          </Box>
        </div>
        <Button onClick={generatePDF()} style={{ display: "none" }}>
          Generate print
        </Button>
      </div>
    </Modal>
  );
};

export default PrintPdf;
