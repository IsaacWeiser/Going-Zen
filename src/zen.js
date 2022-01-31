import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppViews } from "./applicationViews";
import { NavBar } from "./components/nav/navbar";
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register";


export const Zen = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("zen_user")) {
          return (
            <>
              <NavBar />
              <AppViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);