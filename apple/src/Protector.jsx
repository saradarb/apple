import React from "react";
import { Navigate } from "react-router-dom";
import { userData } from "./helpers";

const Protector = ({ children }) => {
  const { jwt } = userData();

  if (!jwt) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default Protector;
