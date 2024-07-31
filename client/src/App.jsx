import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConditionRoute from "./components/ConditionRoute";
import Header from "./components/landingpage/Header";
import Footer from "./components/landingpage/Footer";
import LandingPage from "./pages/LandingPage";
import Products from "./components/landingpage/Products";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
