import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ConditionRoute = ({ children }) => {
  const location = useLocation(false);
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (
      location.pathname === "/board" ||
      location.pathname === "/board/home" ||
      location.pathname === "/board/products" ||
      location.pathname === "/board/createProduct" ||
      location.pathname === "/board/customers" ||
      location.pathname === "/board/clients" ||
      location.pathname === "/work" ||
      location.pathname === "/board/orders" ||
      location.pathname === "/board/plans" ||
      location.pathname === "/board/create" ||
      location.pathname === "/board/messages" ||
      location.pathname === "/shop" ||
      location.pathname === "/shop/cart" ||
      location.pathname === "/productDetails/:id" ||
      location.pathname === "/checkout"
    ) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [location]);

  return <div>{display && children}</div>;
};

export default ConditionRoute;
