import {
  Alert,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import "../PlaceOrder/PlaceOrder.scss";
import AddIcon from "@mui/icons-material/Add";
import { placeOrderService } from "../../services";
import { getFromLocalStorage } from "../../utils/localstorage";

const PlaceOrder = ({ bookList, gameId }) => {
  const [total, setTotal] = useState(0);
  const [updatedValue, setUpdatedValue] = useState(0);
  const [bookNumberSubtotal, setBookNumberSubTotal] = useState(0);
  const [pageNumberSubtotal, setPageNumberSubtotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleBookQuantity = (
    value,
    formikProps,
    fieldName,
    bookList,
    total,
  ) => {
    const bookId = bookList?.find((data) => {
      if (formikProps?.values?.bookNumber === data?.number) {
        return data?.price;
      }
    });
    const bookNumberQuantity = parseInt(value, 10) || 0;
    const bookNumberSubtotal = bookNumberQuantity * bookId?.price;
    const updatedTotal = total + bookNumberSubtotal;
    setBookNumberSubTotal(updatedTotal);
    setTotal(updatedTotal);
    // if (total) {
    //   const newTotal = bookNumberSubtotal + updatedValue;
    //   console.log(newTotal);
    //   setTotal(newTotal);
    // } else {
    //   setTotal(bookNumberSubtotal);
    // }
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
  };

  const handlePageQuantity = (
    formikProps,
    fieldName,
    value,
    bookList,
    bookNumberSubtotal,
    updatedValue
  ) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    const bookId = bookList?.find((data) => {
      if (formikProps?.values?.bookNumber === data?.number) {
        return data?.price;
      }
    });
    const pageNumberQuantity = parseInt(value, 10) || 0;
    const pageNumberSubtotal = pageNumberQuantity * bookId?.price;
    const total = pageNumberSubtotal + bookNumberSubtotal;
    setPageNumberSubtotal(total);
    setTotal(total);
    // console.log(bookNumberSubtotal);
    // if(updatedValue){
    //   const updatedTotal = updatedValue + pageNumberSubtotal + bookNumberSubtotal;
    //   setUpdatedValue(updatedTotal);
    // }else {
    //   console.log(total);
    //   setTotal(total);
    // }
  };

  const handleQuantity = (
    formikProps,
    fieldName,
    value,
    bookList,
    pageNumberSubtotal,
  ) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    const bookId = bookList?.find((data) => {
      if (formikProps?.values?.bookNumber === data?.number) {
        return data?.price;
      }
    });
    const selectedRangeTotal = parseInt(value, 10) || 0;
    const selectedSubTotal = selectedRangeTotal * bookId?.price;
    const total =  pageNumberSubtotal + selectedSubTotal;
    console.log(total);
    setTotal(total);
    // if(updatedValue){
    //   const updatedTotal = updatedValue + total;
    //   setUpdatedValue(updatedTotal);
    // }else{
    //   setTotal(total);
    // }
  };

  const handleOrder = async (values, gameId) => {
    const user = getFromLocalStorage("loginData");
    const bookId = bookList?.find((data) => {
      if (values?.bookNumber === data?.number) {
        return data?._id;
      }
    });
    const { pageNumberDropdown, dropdownQuantity } = values;
    const [start, end] = pageNumberDropdown.split(" - ").map(Number);
    const pagesData = [];
    const data = {
      pageNumber: values.pageNumber,
      quantity: values.pageQuantity,
    };
    pagesData?.push(data);
    for (let i = start; i <= end; i++) {
      pagesData.push({
        pageNumber: i.toString(),
        quantity: dropdownQuantity,
      });
    }
    try {
      const newOrder = {
        orderData: [
          {
            bookId: bookId._id,
            userId: user?._id,
            bookNumber: values.bookNumber,
            quantity: values.bookQuantity,
            gameId: gameId,
            pages: pagesData,
          },
        ],
      };
      const response = await placeOrderService(newOrder);
      if (response.status === 200) {
        setSuccessMessage("Order Placed");
        setOpen(true);
      } else {
        console.log(response?.error);
        setErrorMessage(response?.error);
        setOpen(true);
      }
    } catch (error) {}
  };

  const handleReset = (formikProps) => {
    formikProps.resetForm({
      values: {
        bookQuantity: "",
        pageNumber: "",
        pageQuantity: "",
        pageNumberDropdown: "",
        dropdownQuantity: "",
      },
    });
  };

  const handleAdd = (formikProps) => {
    // const currentTotal = updatedValue + total;
    formikProps && handleReset(formikProps);
    // setUpdatedValue(currentTotal);
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
          bookQuantity: "",
          pageNumber: "",
          pageQuantity: "",
          pageNumberDropdown: "",
          dropdownQuantity: "",
        }}
        onSubmit={(values) => {
          handleOrder(values, gameId);
        }}
      >
        {(formikProps) => (
          <Form className="booking-page">
            {open && errorMessage && (
              <Box mb={2}>
                <Alert onClose={() => setOpen(false)} severity="error">
                  {errorMessage}
                </Alert>
              </Box>
            )}
            {open && successMessage && (
              <Box mb={2}>
                <Alert onClose={() => setOpen(false)} severity="success">
                  {successMessage}
                </Alert>
              </Box>
            )}
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <TextField
                style={{
                  width: "170px",
                  height: "56px",
                }}
                placeholder="Book no"
                className="book-number"
                name="bookNumber"
                value={formikProps?.values?.bookNumber}
                onChange={formikProps?.handleChange}
              />
              <TextField
                style={{
                  width: "170px",
                  height: "56px",
                }}
                placeholder="Quantity"
                className="book-number"
                name="bookQuantity"
                value={formikProps?.values?.bookQuantity}
                onChange={(e) =>
                  handleBookQuantity(
                    e?.target?.value,
                    formikProps,
                    "bookQuantity",
                    bookList,
                    total
                  )
                }
              />
            </Box>
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <TextField
                style={{
                  width: "170px",
                  height: "56px",
                }}
                placeholder="Page no"
                className="book-number"
                name="pageNumber"
                value={formikProps?.values?.pageNumber}
                onChange={formikProps?.handleChange}
              />
              <TextField
                style={{
                  width: "170px",
                  height: "56px",
                }}
                placeholder="Quantity"
                className="book-number"
                name="pageQuantity"
                value={formikProps?.values?.pageQuantity}
                onChange={(e) =>
                  handlePageQuantity(
                    formikProps,
                    "pageQuantity",
                    e.target.value,
                    bookList,
                    bookNumberSubtotal,
                  )
                }
              />
            </Box>
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <FormControl fullWidth>
                <Select
                  style={{
                    width: "170px",
                    height: "56px",
                    borderRadius: "10px",
                    border: "1px solid #003F63",
                    color: "#000",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formikProps?.values?.pageNumberDropdown}
                  label=""
                  name="pageNumberDropdown"
                  onChange={formikProps?.handleChange}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em style={{ color: "#757575" }}>Placeholder</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select Page Range</em>
                  </MenuItem>
                  <MenuItem value={"1 - 10"}>1-10</MenuItem>
                  <MenuItem value={"11 - 20"}>11-20</MenuItem>
                  <MenuItem value={"21 - 30"}>21-30</MenuItem>
                  <MenuItem value={"31 - 40"}>31-40</MenuItem>
                  <MenuItem value={"41 - 50"}>41-50</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{
                  width: "170px",
                  height: "56px",
                }}
                placeholder="Quantity"
                className="book-number"
                name="dropdownQuantity"
                value={formikProps?.values?.dropdownQuantity}
                onChange={(e) =>
                  handleQuantity(
                    formikProps,
                    "dropdownQuantity",
                    e.target.value,
                    bookList,
                    pageNumberSubtotal,
                  )
                }
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Typography fontSize={16} fontWeight={600} color="#003F63">
                Total
              </Typography>
              <Typography fontSize={16} fontWeight={600} color="#003F63">
                {total}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Button
                variant="contained"
                style={{
                  width: "70px",
                  height: "50px",
                  background: "#003F63",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                type="submit"
                onClick={() => handleAdd(formikProps)}
              >
                <AddIcon />
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "100px",
                  height: "50px",
                  background: "#003F63",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                type="submit"
              >
                Order
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlaceOrder;
