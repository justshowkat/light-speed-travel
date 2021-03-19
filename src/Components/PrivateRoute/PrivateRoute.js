import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../Context/Context";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(userContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isSignedIn ? (
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
