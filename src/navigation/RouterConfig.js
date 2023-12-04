import React, { useEffect, useState } from "react";
import LoginForm from "../pages/Login/LoginForm";
import { Route, Routes } from "react-router";
import Layout from "../pages/Layout/Layout";
import { getFromLocalStorage } from "../utils/localstorage";

const RouterConfig = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = getFromLocalStorage("loginData");
    if (authToken?.id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<LoginForm />} />
        {/* <Route path="dashboard" element={<Layout />} /> */}
        {isLoggedIn ? (
          <Route path="dashboard" element={<Layout />} />
        ) : (
          <Route exact path="/" element={<LoginForm />} />
        )}
      </Route>
    </Routes>
  );
};

export default RouterConfig;
