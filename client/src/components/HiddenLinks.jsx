import { useContext, useEffect } from "react";
import { UserAuth } from "../components/context/AuthContext";
import { UserContext } from "../components/context/UserContext";

export const ShowOnLogin = ({ children }) => {
  const { token } = UserAuth();

  if (token) {
    return children;
  }
  return null;
};

export const ShowCustomer = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  // useEffect(() => {
  //     getUser()
  // },[])

  if (currentUser?.role === "customer") {
    return children;
  }
  return null;
};

export const ShowAdmin = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  // useEffect(() => {
  //     getUser()
  // },[])

  if (currentUser?.role === "admin") {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const { token } = UserAuth();

  if (!token) {
    return children;
  }
  return null;
};
