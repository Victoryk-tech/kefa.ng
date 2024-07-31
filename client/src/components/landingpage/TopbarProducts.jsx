import React from "react";
import { Link } from "react-router-dom";

const TopbarProducts = () => {
  return (
    <div className="py-6 flex items-start justify-start">
      <div className="space-x-2">
        <Link
          to="/products"
          className="border-[#492C02] border-[1px] rounded-2xl px-3 py-2 hover:outline-none hover:border-none hover:bg-[#492C02] hover:text-white transition-all ease-out scale-100 text-[14px]"
        >
          All
        </Link>
        <Link
          to="/products"
          className="border-[#492C02] border-[1px] rounded-2xl px-3 py-2 hover:outline-none hover:border-none hover:bg-[#492C02] hover:text-white transition-all ease-out scale-100 text-[14px]"
        >
          Shoes
        </Link>
        <Link
          to="/products"
          className="border-[#492C02] border-[1px] rounded-2xl px-3 py-2 hover:outline-none hover:border-none hover:bg-[#492C02] hover:text-white transition-all ease-out scale-100 text-[14px]"
        >
          Clothes
        </Link>
        <Link
          to="/products"
          className="border-[#492C02] border-[1px] rounded-2xl px-3 py-2 hover:outline-none hover:border-none hover:bg-[#492C02] hover:text-white transition-all ease-out scale-100 text-[14px]"
        >
          Shorts
        </Link>
      </div>
    </div>
  );
};

export default TopbarProducts;