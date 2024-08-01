import React from "react";
import Header from "../components/landingpage/Header";
import Reviews from "../components/landingpage/Reviews";
import Hero from "../components/landingpage/Hero";
import { Outlet } from "react-router-dom";
import TopbarProducts from "../components/landingpage/TopbarProducts";
import Service from "../components/landingpage/Service";
import FlashSales from "../components/landingpage/FlashSales";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FlashSales />

      <div className="px-2 py-10 sm:px-4 lg:px-10 ">
        <div className="border-l-[24px] border-[#492C02] py-7 pl-4  font-inter">
          <h1 className="font-semibold text-[16px] text-[#492C02]">
            Our Products
          </h1>
        </div>

        <div className="w-full">
          <TopbarProducts />
          <div className="w-full py-8 sm:py-16">
            <Outlet />
          </div>
        </div>
      </div>

      <Reviews />
      <Service />
    </div>
  );
};

export default LandingPage;
