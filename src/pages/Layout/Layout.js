import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import Dashboard from "../Dashboard/Dashboard";

const Layout = () => {
  return (
      <Grid container>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Header />
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} >
        <Dashboard />
        </Grid>
      </Grid>
  );
};

export default Layout;