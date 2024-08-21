import React from "react";
import Header from "../components/Landing/Header";
import Discounts from "../components/Landing/Discounts";
import FlashSales from "../components/landingpage/FlashSales";

import Reviews from "../components/landingpage/Reviews";
import Hero from "../components/Landing/Hero";
import Welcome from "../components/Landing/Welcome";
import Newsletter from "../components/Landing/Newsletter";
import Faq from "../components/landingpage/Faq";
import Services from "../components/Landing/Services";
const Landing = () => {
  return (
    <div className="w-full h-auto scroll-smooth bg-stone-50 text-[#6b4343]">
      <Hero />
      <FlashSales />

      <Newsletter />
      <Welcome />
      <Services />
      <Faq />
      <Reviews />
    </div>
  );
};

export default Landing;
