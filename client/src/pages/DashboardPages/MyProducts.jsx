import React from "react";
import { CiExport } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import Clients from "../../components/dashboard/Clients";
const MyProducts = () => {
  return (
    <div className="p-5 h-screen">
      <div className="flex items-center space-x-4 md:gap-x-0 md:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Product List</h1>
          <p className="font-poppin text-[10px] md:text-[14px]">
            Monitor your store's progress to improve your sales.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 border-[1px] border-black rounded-md p-1">
            <CiExport />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start justify-between py-8">
          <div className=" flex items-center justify-center space-x-2">
            <IoFilterOutline className="text-2xl text-[#5B3702]" />
            <p className="text-[#5B3702]">Filter</p>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-3">
            <p className=" font-poppin font-normal text-sm">Sort by:</p>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Status</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Category</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-2  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-sm">Stock</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
          </div>
        </div>

        <Clients />
      </div>
    </div>
  );
};

export default MyProducts;
