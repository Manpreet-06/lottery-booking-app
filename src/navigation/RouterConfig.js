import React, { useEffect, useState } from "react";
import LoginForm from "../pages/Login/LoginForm";
import { Route, Routes } from "react-router";
import Layout from "../pages/Layout/Layout";
import { getFromLocalStorage } from "../utils/localstorage";
import { routes } from "./route-constant";

const RouterConfig = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authToken = getFromLocalStorage("loginData");

  useEffect(() => {
    if (authToken?.id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log(authToken?.id);
  }, []);

  if (isLoggedIn === true) {
    return (
      <Routes>
        <Route>
          <Route exact path={routes.login} element={<LoginForm />} />
          <Route path={routes.dashboard} element={<Layout />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route>
          <Route exact path={routes.login} element={<LoginForm />} />
        </Route>
      </Routes>
    );
  }
};

export default RouterConfig;
