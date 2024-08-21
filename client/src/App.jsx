import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionRoute from "./components/ConditionRoute";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/dashboard/Layout";
import Conditional from "./components/Conditional";
import Home from "./pages/DashboardPages/Home";
import Clients from "./pages/DashboardPages/Clients";
import MyProducts from "./pages/DashboardPages/MyProducts";
import NotFound from "./components/NotFound";
import Orders from "./pages/DashboardPages/Orders";
import WorkPlan from "./pages/DashboardPages/WorkPlan";
import Create from "./pages/DashboardPages/Create";
import Messages from "./pages/DashboardPages/Messages";
import ProductDetails from "./components/Shop/ProductDetails";
import { ToastContainer, toast } from "react-toastify";
import { RequireAuth } from "./components/RequireAuth";
import BottomNavBar from "./components/Shop/BottomNavBar";
import { UserProfile } from "./pages/UserProfile";
import Shop from "./pages/Shop";
import Condition from "./components/Condition";

import Landing from "./pages/Landing";
import Header from "./components/Landing/Header";
import Footer from "./components/Landing/Footer";
import ConditionH from "./components/ConditionH";
import HeadOption from "./components/Shop/HeadOption";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionRoute>
        <Header />
      </ConditionRoute>
      <ConditionH>
        <HeadOption />
      </ConditionH>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/" element={<LandingPage />}></Route> */}

        <Route path="/login/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="shop" element={<Shop />} />

          {/* <Route path="products" element={<Products />} /> */}
          <Route path="profile" element={<UserProfile />} />
        </Route>

        <Route path="shop/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />

        <Route element={<RequireAuth />}>
          <Route path="board" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<MyProducts />} />
            <Route path="create" element={<Create />} />
            <Route path="messages" element={<Messages />} />
            <Route path="plans" element={<WorkPlan />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Condition>
        <BottomNavBar />
      </Condition>
      <Conditional>
        <Footer />
      </Conditional>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
};

export default App;
