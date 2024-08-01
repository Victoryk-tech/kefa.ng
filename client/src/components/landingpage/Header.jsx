import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ContextProvider";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="sticky bottom-0 px-2 md:px-4 lg:px-10 py-6 flex items-center justify-between w-full shadow-md h-auto z-[999]">
      <Link to="/">
        <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-[#492C02]">
          Kefa.ng
        </h1>
      </Link>
      <nav className="hidden  md:flex items-center justify-center gap-x-12">
        <p>Shop</p>
        <p>Reviews</p>
        <p>Products</p>
        <p>About</p>
      </nav>
      <Link to="cart" className="relative">
        <IoCartOutline className="text-[28px] text-[#6b4343]" />
        <h1 className="absolute bottom-4 text-[#fafafa]  bg-[#492c02] p-1 rounded-xl font-medium text-[15px]">
          {cartState.totalQuantity}
        </h1>
      </Link>
    </div>
  );
};

export default Header;
