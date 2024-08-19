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

      <div className="grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center py-10 lg:px-8 gap-y-6 md:gap-2 lg-gap-4">
        {flash.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white p-3 shadow rounded-xl w-full sm:w-60  lg:w-64 h-80  text-sm md:text-normal"
            >
              <div className="h-52 w-full bg-stone-200 rounded-2xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
              <div className="h-[40%] space-y-2 py-4">
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
                    N{data.amount}
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
