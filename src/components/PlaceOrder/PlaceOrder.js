import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
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
import PrintPdf from "../PrintPdf/PrintPdf";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletData } from "../../Store/actions/walletAction";
import { walletHistoryData } from "../../Store/actions/wallethistoryAction";

const PlaceOrder = ({ bookList, gameId }) => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [bookNumberSubtotal, setBookNumberSubTotal] = useState(0);
  const [pageNumberSubtotal, setPageNumberSubtotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [bookPrice, setBookPrice] = React.useState();
  const [openPdf, setOpenPdf] = React.useState(false);
  const [placeOrderData, setPlaceOrderData] = React.useState([]);
  const [orderData, setOrderData] = React.useState([]);

  const handleBookNumber = (formikProps, fieldName, value) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    const bookId = bookList?.find((data) => {
      if (value === data?.number) {
        return data?.price;
      }
    });
    setBookPrice(bookId?.price);
  };
  const handleBookQuantity = (
    value,
    formikProps,
    fieldName,
    total,
    bookPrice
  ) => {
    const bookNumberQuantity = parseInt(value, 10) || 0;
    const bookNumberSubtotal = bookNumberQuantity * bookPrice;
    const updatedTotal = total + bookNumberSubtotal;
    setBookNumberSubTotal(updatedTotal);
    setTotal(updatedTotal);
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
    bookNumberSubtotal,
    bookPrice
  ) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    const pageNumberQuantity = parseInt(value, 10) || 0;
    const pageNumberSubtotal = pageNumberQuantity * bookPrice;
    const total = pageNumberSubtotal + bookNumberSubtotal;
    setPageNumberSubtotal(total);
    setTotal(total);
  };

  const handleQuantity = (
    formikProps,
    fieldName,
    value,
    pageNumberSubtotal,
    bookPrice
  ) => {
    formikProps.handleChange({
      target: {
        name: fieldName,
        value: value,
      },
    });
    const selectedRangeTotal = parseInt(value, 10) || 0;
    const selectedSubTotal = selectedRangeTotal * bookPrice * 10;
    const total = pageNumberSubtotal + selectedSubTotal;
    setTotal(total);
  };

  const handleClosePdf = () => setOpenPdf(false);
  const handleOpenPdf = () => setOpenPdf(true);

  const handleOrder = async (values, formikProps, gameId) => {
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
        bookId: bookId._id,
        userId: user?._id,
        bookNumber: values.bookNumber,
        quantity: values.bookQuantity,
        gameId: gameId,
        pages: pagesData,
      };

      let arrayToPass = [...orderData];
      arrayToPass[arrayToPass.length] = newOrder;
      setOrderData(arrayToPass);
      console.log(" FINAL ARRAY ", JSON.stringify(arrayToPass));
      let valueToPass = {
        orderData: arrayToPass,
      };
      const response = await placeOrderService(valueToPass);
      if (response.status === 200) {
        const { orderId } = response.data;
        setSuccessMessage("Order Placed");
        setOpen(true);
        const modifiedData = {
          bookNumber: values?.bookNumber,
          quantity: values?.bookQuantity,
          pageNumber: values?.pageNumber,
          pageQuantity: values?.pageQuantity,
          pageNumberDropdown: values?.pageNumberDropdown,
          dropdownQuantity: values?.dropdownQuantity,
          orderId: orderId,
        }
        console.log(modifiedData);
        let newArray = [...placeOrderData];
        newArray[newArray.length] = modifiedData;
        console.log("line no 158", newArray);
        setPlaceOrderData(newArray);   
        handleReset(formikProps);
        formikProps.resetForm({ values: { bookNumber: "" } });
        dispatch(fetchWalletData(user?._id));
        dispatch(walletHistoryData(user?._id));
      } else {
        setErrorMessage(response?.error);
        setOpen(true);
        formikProps.resetForm({ values: { bookNumber: "" } });
        handleReset(formikProps);
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

  const handleAdd = (formikProps, gameId) => {
    const user = getFromLocalStorage("loginData");
    const bookId = bookList?.find((data) => {
      if (formikProps?.values?.bookNumber === data?.number) {
        return data?._id;
      }
    });
    const { pageNumberDropdown, dropdownQuantity } = formikProps?.values;
    const [start, end] = pageNumberDropdown.split(" - ").map(Number);
    const pagesData = [];
    const data = {
      pageNumber: formikProps?.values.pageNumber,
      quantity: formikProps?.values.pageQuantity,
    };
    pagesData?.push(data);
    for (let i = start; i <= end; i++) {
      pagesData.push({
        pageNumber: i.toString(),
        quantity: dropdownQuantity,
      });
    }
    const newOrder = {
      bookId: bookId._id,
      userId: user?._id,
      bookNumber: formikProps?.values.bookNumber,
      quantity: formikProps?.values.bookQuantity,
      gameId: gameId,
      pages: pagesData,
    };

    let arrayToPass = [...orderData];
    arrayToPass[arrayToPass.length] = newOrder;
    console.log(JSON.stringify(arrayToPass));
    const modifiedOrderData = arrayToPass.map((order) => ({
      bookNumber: order.bookNumber,
      quantity: order.quantity,
      pageNumber: formikProps?.values.pageNumber,
      pageQuantity: formikProps?.values.pageQuantity,
      pageNumberDropdown: formikProps?.values?.pageNumberDropdown,
      dropdownQuantity: formikProps?.values?.dropdownQuantity,
    }));
    console.log("add order" ,modifiedOrderData);
    setOrderData(arrayToPass);
    setPlaceOrderData(modifiedOrderData);
    formikProps && handleReset(formikProps);
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
        onSubmit={(values, formikProps) => {
          handleOrder(values, formikProps, gameId);
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
                onChange={(e) =>
                  handleBookNumber(formikProps, "bookNumber", e.target.value)
                }
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
                    total,
                    bookPrice
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
                    bookNumberSubtotal,
                    bookPrice
                  )
                }
              />
            </Box>
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                    color: "	#909090",
                  }}
                >
                  Select Page Range
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={formikProps.values.pageNumberDropdown || ""}
                  onChange={formikProps.handleChange}
                  name="pageNumberDropdown"
                  input={<OutlinedInput label="select page range" />}
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
                    pageNumberSubtotal,
                    bookPrice
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
                onClick={() => handleAdd(formikProps, gameId)}
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
                onClick={handleOpenPdf}
              >
                Order
              </Button>
            </Box>
            {openPdf === true && (
              <PrintPdf
                placeOrderData={placeOrderData}
                open={openPdf}
                handleClose={handleClosePdf}
              />
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlaceOrder;
