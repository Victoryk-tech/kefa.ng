import React from "react";
import Products from "../components/landingpage/Products";
import TopbarProducts from "../components/landingpage/TopbarProducts";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="px-2 py-10 sm:px-4 lg:px-10 ">
        <div className="border-l-[24px] border-[#492C02] py-7 pl-4  font-inter">
          <h1 className="font-semibold text-[16px] text-[#492C02]">
            Our Products
          </h1>
        </div>

        <div className="w-full">
          <TopbarProducts />
          <div className="w-full py-8">
            <Outlet />
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Shop;
