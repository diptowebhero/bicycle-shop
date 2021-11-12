import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";
import loader from "../assets/images/Ripple-1s-200px.gif";
const AdminRoute = ({ children, ...rest }) => {
  const { Allcontext } = useAuth();
  const { user, loading, admin } = Allcontext;
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
        user.email && admin ? (
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

export default AdminRoute;
