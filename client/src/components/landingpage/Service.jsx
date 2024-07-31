import React from "react";
import delivery from "../assets/deliveryicon.png";
import customer from "../assets/customer.png";
import tick from "../assets/tick.png";
const Service = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 items-center text-center justify-center md:justify-between gap-y-6 lg:gap-x-[150px] px-2 md:px-6 lg:px-16 md:pb-10 py-16  ">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={delivery} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={customer} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
          <img src={tick} alt="" />
        </div>
        <div className="">
          <h2 className="font-poppin text-[20px] font-semibold">
            FREE AND FAST DELIVERY
          </h2>
          <p className="font-poppin text-[14px] font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
