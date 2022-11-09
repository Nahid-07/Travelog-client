import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../Context/AuthContext";

const PrivetRouter = ({ children }) => {
  const { user,loading } = useContext(ContextProvider);
  let location = useLocation();
  if(loading){
    return <progress className="progress w-full"></progress>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
