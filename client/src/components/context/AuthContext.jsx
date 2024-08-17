import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

let backendURL;
if (process.env.NODE_ENV === "production") {
  backendURL = "https://kefa-ng.onrender.com/api/auth";
} else {
  backendURL = "http://localhost:8000/api/auth";
}
// console.log(backendURL)

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState();

  //LoginUser
  const Login = async (userData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(`${backendURL}/login`, userData, config);

    const token = JSON.stringify(response.data.token);
    const userId = JSON.stringify(response.data.user._id);
    const userRole = response.data.user.role;
    console.log(response.data.user.role);
    console.log(userRole);
    if (userRole === "customer") {
      window.location.href = "/shop";
    } else {
      window.location.href = "/board";
    }
    if (token && userId) {
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("token", token);
      // console.log(token)
    }
    return await response.data;
  };

  //RegisterUser
  const Register = async (userData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${backendURL}/register`,
      userData,
      config
    );

    const token = JSON.stringify(response.data.token);
    const userId = JSON.stringify(response.data.user._id);

    if (userId && token) {
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("token", token);
      // console.log(token)
    }
    return response.data;
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, Login, Register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const UserAuth = () => {
  return useContext(AuthContext);
};
