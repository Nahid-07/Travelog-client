import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../Context/AuthContext";

const PrivetRouter = ({ children }) => {
  const { user } = useContext(ContextProvider);
  let location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
