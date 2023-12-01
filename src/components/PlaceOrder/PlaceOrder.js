import {
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

  const calculateTotal = (values) => {
    const bookId = bookList?.find((data) => {
      if (values?.bookNumber === data?.number) {
        return data?.price;
      }
    });
    const bookNumberQuantity = parseInt(values?.bookQuantity, 10) || 0;
    const bookNumberSubtotal = bookNumberQuantity * bookId?.price;
    setTotal(bookNumberQuantity);
    const pageNumberQuantity = parseInt(values?.pageQuantity, 10) || 0;
    const pageNumberSubtotal = pageNumberQuantity * bookId?.price;
    const total = pageNumberSubtotal + bookNumberQuantity;
    setTotal(total);
    const selectedRangeTotal = parseInt(values?.dropdownQuantity, 10) || 0;
    const selectedSubTotal = selectedRangeTotal * bookId?.price;

    const totalAmount =
      bookNumberSubtotal + pageNumberSubtotal + selectedSubTotal;
    setTotal(totalAmount);
  };

  const handleBookQuantity = (formikProps, fieldName, value, bookList) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    if (value) {
      const bookId = bookList?.find((data) => {
        if (formikProps?.values?.bookNumber === data?.number) {
          return data?.price;
        }
      });
      const bookNumberQuantity =
        parseInt(formikProps?.values?.bookQuantity, 10) || 0;
      const bookNumberSubtotal = bookNumberQuantity * bookId?.price;
      setBookNumberSubTotal(bookNumberSubtotal);
      if(bookNumberSubtotal){
      setTotal(bookNumberSubtotal);
      }
    }
  };

  const handlePageQuantity = (
    formikProps,
    fieldName,
    value,
    bookList,
    bookNumberSubtotal
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
    const pageNumberQuantity =
      parseInt(formikProps?.values?.pageQuantity, 10) || 0;
    const pageNumberSubtotal = pageNumberQuantity * bookId?.price;
    const total = pageNumberSubtotal + bookNumberSubtotal;
    setPageNumberSubtotal(total);
    if(total){
    setTotal(total);
    }
  };

  const handleQuantity = (
    formikProps,
    fieldName,
    value,
    bookList,
    bookNumberSubtotal,
    pageNumberSubtotal
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
    const selectedRangeTotal =
      parseInt(formikProps?.values?.dropdownQuantity, 10) || 0;
    const selectedSubTotal = selectedRangeTotal * bookId?.price;
    const total = bookNumberSubtotal + pageNumberSubtotal + selectedSubTotal;
    if (total) {
      setTotal(total);
    }
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
    setTotal(0);
  };

  const handleAdd = (formikProps) => {
    formikProps && handleReset(formikProps);
    setUpdatedValue(updatedValue + total);
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
                    formikProps,
                    "bookQuantity",
                    e?.target?.value,
                    bookList
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
                    bookNumberSubtotal
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
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formikProps?.values?.pageNumberDropdown}
                  label=""
                  name="pageNumberDropdown"
                  onChange={formikProps?.handleChange}
                  renderValue={(selected) => {
                    if (!selected || selected.length === 0) {
                      return <em>Placeholder</em>;
                    }
                    return selected;
                  }}
                >
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
                    bookNumberSubtotal
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
                {updatedValue ? updatedValue : total}
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
