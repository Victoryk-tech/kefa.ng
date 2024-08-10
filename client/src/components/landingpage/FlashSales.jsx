import React from "react";
import CountDown from "./CountDown";
import { flash } from "./database/flash";

const FlashSales = () => {
  return (
    <div className="px-2 sm:px-4 lg:px-10 py-10">
      <div className="border-l-[24px] border-[#492C02] pl-4  font-inter">
        <h1 className="font-semibold text-[16px] text-[#492C02]">
          Flash Sales
        </h1>
        <CountDown />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center py-10 lg:px-8 gap-y-3">
        {flash.map((data, index) => {
          return (
            <div
              key={index}
              className="rounded-md w-[150px]  md:w-44 h-52 bg-stone-100"
            >
              <div className="rounded-md h-[60%] w-full">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-[40%] px-2 py-4">
                <h3 className="font-poppin text-sm font-semibold">
                  Brand:
                  <span className="text-amber-900 font-normal">
                    {data.brand}
                  </span>
                </h3>
                <h3 className="font-poppin text-sm font-semibold">
                  Category:
                  <span className="text-amber-900 font-normal">
                    {data.category}
                  </span>
                </h3>
                <h3 className="font-poppin text-sm font-semibold">
                  Price:
                  <span className="text-amber-900 font-normal">
                    {data.amount}
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashSales;
