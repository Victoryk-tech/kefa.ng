import React from "react";
import { Link } from "react-router-dom";

const HeadOption = () => {
  return (
    <div className="sticky top-0 px-2 md:px-4 lg:px-10 py-6 flex items-center justify-between bg-white w-full shadow-md h-auto z-[999]">
      <Link to="/">
        <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-[#492C02]">
          Kefa.ng
        </h1>
      </Link>

      <Link
        to="login"
        className="bg-[#6b4343] p-2 rounded-2xl text-[14px] text-white font-normal hover:border-[#6b4343] hover:border-[1px] hover:text-[#6b4343] hover:bg-transparent transition-all ease-out"
      >
        Login
      </Link>
    </div>
  );
};

export default HeadOption;
