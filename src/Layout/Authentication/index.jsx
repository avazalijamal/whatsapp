import React from "react";
import { Navigate } from "react-router-dom";

const İndex = ({ children }) => {
  if (!localStorage.getItem("user"))
    return <Navigate to={process.env.REACT_APP_LOGIN} />;
  else return children;
};

export default İndex;
