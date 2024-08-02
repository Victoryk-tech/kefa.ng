import React from "react";
import { CiExport } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import Clients from "../../components/dashboard/Clients";
import { Link } from "react-router-dom";
const MyProducts = () => {
  return (
    <div className="py-5 px-2 sm:p-5 h-screen">
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
          <Link
            to="/board/create"
            className=" flex items-center justify-center space-x-1 cursor-pointer"
          >
            <p className="text-[#5B3702] font-semibold hover:underline">
              Create
            </p>
            <IoAdd className="text-xl text-amber-700 font-bold" />
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-3">
            <IoFilterOutline className="text-2xl text-[#5B3702]" />
            <div className="flex items-center justify-center font-poppin gap-x-1  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-[12px]">Status</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-1  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-[12px]">Category</p>
              <RiArrowDownSLine className="text-xl" />
            </div>
            <div className="flex items-center justify-center font-poppin gap-x-1  border-[1px] border-[#5B3702] cursor-pointer text-[#5B3702] hover:bg-[#5B3702] hover:outline-none hover:text-white transition-all ease-out p-1 rounded-md">
              <p className="text-[12px]">Stock</p>
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
