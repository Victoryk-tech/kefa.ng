import React from "react";
import CountDown from "./CountDown";

const FlashSales = () => {
  return (
    <div className="px-2 sm:px-4 lg:px-10 py-10">
      <div className="border-l-[24px] border-[#492C02] pl-4  font-inter">
        <h1 className="font-semibold text-[16px] text-[#492C02]">
          Flash Sales
        </h1>
        <CountDown />
      </div>
    </div>
  );
};

export default FlashSales;
