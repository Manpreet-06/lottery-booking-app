import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DataGrid } from "@mui/x-data-grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "600px",
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
    documentTitle: "orderData",
  });
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const rows =
    placeOrderData?.length > 0
      ? placeOrderData.map((order, index) => ({
          id: index + 1,
          bookNumber: order.bookNumber,
          quantity: order.quantity,
          pageNumber: order.pageNumber,
          pageQuantity: order.pageQuantity,
          pageNumberDropdown: order.pageNumberDropdown,
          dropdownQuantity: order.dropdownQuantity,
          date: formattedDate,
        }))
      : [];

  const columns = [
    { field: "id", header: "ID", width: 40, sortable: false },
    {
      field: "bookNumber",
      headerName: "Book Number",
      width: 110,
      sortable: false,
    },
    { field: "quantity", headerName: "Quantity", width: 100, sortable: false },
    {
      field: "pageNumber",
      headerName: "Page Number",
      sortable: false,
      width: 140,
    },
    {
      field: "pageQuantity",
      headerName: "Page Quantity",
      sortable: false,
      width: 140,
    },
    {
      field: "pageNumberDropdown",
      headerName: "Page Range",
      sortable: false,
      width: 140,
    },
    {
      field: "dropdownQuantity",
      headerName: "Range Quantity",
      sortable: false,
      width: 140,
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      width: 130,
    }
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <div
          style={{ padding: "20px", ...style, width: "80%" }}
          ref={componentPDF}
        >
          <Box display="flex" alignItems="center" mb={2}>
          <Typography style={{color:  '#003F63', fontWeight: 600}}>Order Id -  </Typography>
          <Typography> {placeOrderData[0]?.orderId}</Typography>
          </Box>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection={false}
            hideFooter={true}
            disableColumnMenu
            autoHeight
            disableColumnFilter
          />
          <Button
            onClick={generatePDF}
            size="small"
            style={{ marginTop: 20, backgroundColor: "#003F63", color: "#fff" }}
          >
            Generate print
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PrintPdf;
