import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";
import loader from "../assets/images/Ripple-1s-200px.gif";
const PrivateRoute = ({ children, ...rest }) => {
  const { Allcontext } = useAuth();
  const { user ,loading} = Allcontext;
  if(loading) {
      return <img src={loader} alt=""/>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
