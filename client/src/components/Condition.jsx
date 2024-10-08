import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Condition = ({ children }) => {
  const location = useLocation(false);
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/board" ||
      location.pathname === "/board/home" ||
      location.pathname === "/board/products" ||
      location.pathname === "/board/createProduct" ||
      location.pathname === "/board/customers" ||
      location.pathname === "/board/clients" ||
      location.pathname === "/login/signup" ||
      location.pathname === "/work" ||
      location.pathname === "/board/orders" ||
      location.pathname === "/board/plans" ||
      location.pathname === "/board/create" ||
      location.pathname === "/board/messages" ||
      location.pathname === "*"
    ) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [location]);

  return <div>{display && children}</div>;
};

export default Condition;
