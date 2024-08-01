import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionRoute from "./components/ConditionRoute";
import Header from "./components/landingpage/Header";
import Footer from "./components/landingpage/Footer";
import LandingPage from "./pages/LandingPage";
import Products from "./components/landingpage/Products";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionRoute>
        <Header />
      </ConditionRoute>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="/login/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
