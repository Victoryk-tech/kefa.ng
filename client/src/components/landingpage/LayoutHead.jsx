import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/ContextProvider";
import { AiFillProfile } from "react-icons/ai";

const LayoutHead = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="sticky top-0 px-2 md:px-4 lg:px-10 py-6 flex items-center justify-between bg-white w-full shadow-md h-auto z-[999]">
      <Link to="/">
        <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-[#492C02]">
          Kefa.ng
        </h1>
      </Link>

      <div className="flex items-center justify-center space-x-3">
        <Link to="/cart" className="relative">
          <IoCartOutline size={30} className=" text-amber-950" />
          <h1 className="absolute top-0 right-0 -mt-2 -mr-1 flex justify-center items-center bg-[#492C02] text-white font-semibold text-[14px] w-6 h-5 rounded-full border-2 border-white">
            {cartState.totalQuantity}
          </h1>
        </Link>
        <Link to="profile" className="">
          <img
            className="w-8 h-8 rounded-full border-2 border-[#492C02]"
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default LayoutHead;
