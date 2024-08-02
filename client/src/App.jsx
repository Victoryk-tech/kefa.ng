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

import Layout from "./components/dashboard/Layout";
import Conditional from "./components/Conditional";
import Home from "./pages/DashboardPages/Home";
import Clients from "./pages/DashboardPages/Clients";
import MyProducts from "./pages/DashboardPages/MyProducts";
import NotFound from "./components/NotFound";
import Orders from "./pages/DashboardPages/Orders";
import WorkPlan from "./pages/DashboardPages/WorkPlan";

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

        <Route path="board" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="clients" element={<Clients />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<MyProducts />} />
          <Route path="plans" element={<WorkPlan />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Conditional>
        <Footer />
      </Conditional>
    </BrowserRouter>
  );
};

export default App;
