import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderService } from "../../services";
import { Form, Formik } from "formik";
import PrintPdf from "../PrintPdf/PrintPdf";
import { useReactToPrint } from "react-to-print";
import "../Booking/Booking.scss";
import AddIcon from "@mui/icons-material/Add";

const Booking = ({ bookList }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const componentPDF = useRef();
  const [setShouldPrint] = useState(false);
  const [placeOrderData, setPlaceOrderData] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState("");
  const [total, setTotal] = useState(0);

  const handleChange = (event) => {
    setPageNumber(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "userdata",
  });
  
  const calculateTotal =(values) =>{
    const price = 200;
    const bookNumberQuantity = parseInt(values?.quantity, 10) || 0;
    const bookNumberSubtotal = bookNumberQuantity * price;

    const pageNumberQuantity = parseInt(values?.quantity, 10) || 0;
    const pageNumberSubtotal = pageNumberQuantity * price;

    const selectedRangeTotal = parseInt(values?.quantity, 10) ||0;
    const selectedSubTotal =   selectedRangeTotal * price;

    const totalAmount = bookNumberSubtotal + pageNumberSubtotal + selectedSubTotal;
    setTotal(totalAmount);
  }

  const handleOrder = async (values) => {
    const bookId = bookList?.find((data) => {
      if (values?.bookNumber === data?.number) {
        return data?._id;
      }
    });
    const pagesData = [];
    values.pageNumber.forEach((page, index) => {
      pagesData.push({
        pageNumber: page,
        pageQuantity: values.quantity[index],
      });
    });
    try {
      const payload = [
        {
          bookId: bookId?._id,
          userId: "653dec2f5068cfd79e725f9e",
          bookNumber: values?.bookNumber,
          pageNumber: values?.pageNumber,
          amount: values?.amount,
          quantity: "",
          gameId: "65410a00d585c95d89a26ccb",
          pages: pagesData,
        },
      ];
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
      calculateTotal(values);
    } catch (error) {}
  };
  
  const handleAdd = () => {
    
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
          quantity: "",
          pageNumber: "",
          quantity: "",
        }}
        onSubmit={(values) => {
          handleOrder(values);
        }}
      >
        {(formikProps) => (
          <Form className="booking-page">
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <TextField
                placeholder={"Book no"}
                style={{
                  width: "150px",
                  height: "56px",
                  borderRadius: "10px",
                  border: "1px solid #003F63",
                  color: "#C4C4C4",
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
                name="quantity"
                value={formikProps?.values?.pageNumber}
                onChange={formikProps?.handleChange}
              />
            </Box>
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <TextField
                placeholder={"Page no"}
                style={{
                  width: "150px",
                  height: "56px",
                  borderRadius: "10px",
                  border: "1px solid #003F63",
                  color: "#C4C4C4",
                }}
                name="pageNumber"
                value={formikProps?.values?.quantity}
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
                name="quantity"
                value={formikProps?.values?.pageNumber}
                onChange={formikProps?.handleChange}
              />
            </Box>
            <Box
              display="flex"
              justifyContent={"space-between"}
              mb={2}
              className="menu-items"
            >
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pageNumber}
                  label=""
                  name="pageNumber"
                  onChange={handleChange}
                  renderValue={(selected) => {
                    if (!selected || selected.length === 0) {
                      return <em>Placeholder</em>;
                    }

                    return selected;
                  }}
                >
                  <MenuItem value={"1 - 10"}>1-10</MenuItem>
                  <MenuItem value={"11 - 21"}>11-20</MenuItem>
                  <MenuItem value={"21 - 30"}>21-30</MenuItem>
                </Select>
              </FormControl>
              <TextField
                placeholder={"Quantity"}
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
                  marginTop: "40px",
                }}
                type="submit"
                onClick={handleAdd}
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
                  marginTop: "40px",
                }}
                type="submit"
                onClick={handleOpen}
              >
                Order
              </Button>
            </Box>
            {/* <PrintPdf
              placeOrderData={placeOrderData}
              open={open}
              handleClose={handleClose}
            /> */}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Booking;
