import React from "react";
import send from "../../assets/sendicon.png";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-3 bg-stone-200 py-6">
      <h1 className="text-[16px] leading-[20.8px] font-semibold">NEWSLETTER</h1>
      <p className="text-sm md:text-[16px] text-center">
        Be the first to know about new products, discounts, and sales!
      </p>
      <div className="w-80 flex  items-center justify-between rounded  border-[1px] border-[#828181] py-2 px-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="outline-none border-none bg-transparent placeholder:text-[14px] placeholder:text-[#534444]"
        />
        <img
          src={send}
          alt=""
          className="bg-[#534444] rounded-2xl p-1 w-7 h-7"
        />
      </div>
    </div>
  );
};

export default Newsletter;
