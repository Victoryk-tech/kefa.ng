import React from "react";
import Header from "../components/landingpage/Header";
import Reviews from "../components/landingpage/Reviews";
import Hero from "../components/landingpage/Hero";
import { Outlet } from "react-router-dom";
import TopbarProducts from "../components/landingpage/TopbarProducts";
import Service from "../components/landingpage/Service";
import FlashSales from "../components/landingpage/FlashSales";
import Faq from "../components/landingpage/Faq";
const LandingPage = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <FlashSales />

      <Faq />
      <Reviews />
      <Service />
    </div>
  );
};

export default LandingPage;
