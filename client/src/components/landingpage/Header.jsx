import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ContextProvider";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="sticky top-0 px-2 md:px-4 lg:px-10 py-6 flex items-center justify-between bg-white w-full shadow-md h-auto z-[999]">
      <Link to="/">
        <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-[#492C02]">
          Kefa.ng
        </h1>
      </Link>
      <nav className="hidden  md:flex items-center justify-center gap-x-12">
        <Link to="board">Shop</Link>
        <p>Reviews</p>
        <p>Products</p>
        <p>About</p>
      </nav>
      <div className="flex items-center justify-center space-x-3">
        {/* <Link to="cart" className="relative">
          <IoCartOutline size={30} className=" text-amber-950" />
          <h1 className="absolute top-0 right-0 -mt-2 -mr-1 flex justify-center items-center bg-[#492C02] text-white font-semibold text-[14px] w-6 h-5 rounded-full border-2 border-white">
            {cartState.totalQuantity}
          </h1>
        </Link> */}

        <Link
          to="login"
          className="bg-[#6b4343] p-2 rounded-2xl text-[14px] text-white font-normal hover:border-[#6b4343] hover:border-[1px] hover:text-[#6b4343] hover:bg-transparent transition-all ease-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
