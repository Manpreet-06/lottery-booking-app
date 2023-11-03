import { Button, Card, Grid, TextField } from "@mui/material";
import React from "react";
import { Form, Formik } from "formik";
import { connect } from "react-redux";
import { fetchLoginData } from "../../Store/actions/loginAction";
import { useNavigate } from "react-router-dom";
import { setInLocalStorage } from "../../utils/localstorage";

const LoginForm = ({ data, error, loading, fetchLoginData }) => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    fetchLoginData(values);
    console.log(data._id);
    setInLocalStorage("loginId", data._id);
    navigate("dashboard");
  };

  return (
    <div>
      <Grid conatiner>
        <Grid
          item
          lg={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          pt={30}
        >
          <Card
            style={{
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "100%",
              maxWidth: "360px",
            }}
          >
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {(formikProps) => (
                <Form>
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="Enter Your Email"
                    style={{ margin: "10px" }}
                    name="email"
                    size="small"
                    value={formikProps.values.email}
                    onChange={formikProps.handleChange}
                    fullWidth
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    style={{ margin: "10px" }}
                    size="small"
                    value={formikProps.values.password}
                    onChange={formikProps.handleChange}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    style={{ marginTop: "10px", background: "#0c3b5e" }}
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state?.loginReducer?.data?.data,
  loading: state?.data?.loading,
  error: state?.data?.error,
});
export default connect(mapStateToProps, { fetchLoginData })(LoginForm);
