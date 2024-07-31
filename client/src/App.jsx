import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import ConditionRoute from "./components/ConditionRoute";
import Header from "./components/landingpage/Header";
import Footer from "./components/landingpage/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionRoute>
        <Header />
      </ConditionRoute>
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
