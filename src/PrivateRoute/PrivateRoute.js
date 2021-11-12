import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";
import loader from "../assets/images/Ripple-1s-200px.gif";
const PrivateRoute = ({ children, ...rest }) => {
  const { Allcontext } = useAuth();
  const { user, loading } = Allcontext;
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <img src={loader} alt="" />
      </div>
    );
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
