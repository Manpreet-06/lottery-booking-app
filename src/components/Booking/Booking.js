import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderService } from "../../services";
import { Form, Formik } from "formik";

const Booking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleOrder = async (values) => {
    console.log(values);
    try {
      const payload = {
        bookId: "653e870b81351a820868588d",
        userId: "653dec2f5068cfd79e725f9e",
        bookNumber: values?.bookNumber,
        pageNumber: values?.pageNumber,
        amount: values?.amount,
        quantity: values?.quantity,
      };
      const response = await placeOrderService(payload);
      console.loe(response);
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
        initialValues={{ bookNumber: "", pageNumber:"" , amount: "", quantity:"" }}
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
                onChange={formikProps.handleChange}
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
                onChange={formikProps.handleChange}
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
                onChange={formikProps.handleChange}
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
                onChange={formikProps.handleChange}
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
            >
              Pre Book
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Booking;
