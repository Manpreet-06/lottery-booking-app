import React from "react";
import LoginForm from "../pages/Login/LoginForm";
import { Route, Routes } from "react-router";
import Layout from "../pages/Layout/Layout";


const RouterConfig = () => {
  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="dashboard" element={<Layout />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
