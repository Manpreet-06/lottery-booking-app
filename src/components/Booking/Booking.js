import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderService } from "../../services";
import { Form, Formik } from "formik";
import PrintPdf from "../PrintPdf/PrintPdf";
import { useReactToPrint } from "react-to-print";

const Booking = ({ bookList }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const componentPDF = useRef();
  const [setShouldPrint] = useState(false);
  const [placeOrderData, setPlaceOrderData] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "userdata",
  });

  const handleOrder = async (values) => {
    const bookId = bookList?.find((data) => {
      if (values?.bookNumber === data?.number) {
        return data?._id;
      }
    });
    console.log(bookId?._id);
    try {
      const payload = {
        bookId: bookId?._id,
        userId: "653dec2f5068cfd79e725f9e",
        bookNumber: values?.bookNumber,
        pageNumber: values?.pageNumber,
        amount: values?.amount,
        quantity: "",
        gameId: "65410a00d585c95d89a26ccb",
      };
      const response = await placeOrderService(payload);
      if (response.status === 200) {
        const combinedData = {
          ...response.data,
          bookNumber: values.bookNumber,
          pageNumber: values.pageNumber,
        };
        setPlaceOrderData(combinedData);
        setShouldPrint(true);
        generatePDF();

      }
    } catch (error) {}
  };

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
      <Formik
        initialValues={{
          bookNumber: "",
          pageNumber: "",
          amount: "",
          quantity: "",
        }}
        onSubmit={(values) => {
          handleOrder(values);
        }}
      >
        {(formikProps) => (
          <Form>
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
                name="bookNumber"
                value={formikProps?.values?.bookNumber}
                onChange={formikProps?.handleChange}
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
                name="pageNumber"
                value={formikProps?.values?.pageNumber}
                onChange={formikProps?.handleChange}
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
                name="quantity"
                value={formikProps?.values?.quantity}
                onChange={formikProps?.handleChange}
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
                name="amount"
                value={formikProps?.values?.amount}
                onChange={formikProps?.handleChange}
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
              type="submit"
              onClick={handleOpen}
            >
              Pre Book
            </Button>
            {/* {shouldPrint === true && (
              <div ref={componentPDF} style={{ width: "100%" }}>
                <PrintPdf placeOrderData={placeOrderData} />
              </div>
            )} */}
            <PrintPdf
              placeOrderData={placeOrderData}
              open={open}
              handleClose={handleClose}
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Booking;
