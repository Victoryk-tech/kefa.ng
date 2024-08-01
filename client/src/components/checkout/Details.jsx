import React, { useContext } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { CartContext } from "../context/ContextProvider";

const Details = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="flex flex-col items-start justify-start pb-14 lg:px-6 w-full md:w-[43%]">
      <div className="w-full">
        {cartState.cart.map((item, index) => {
          return (
            <div>
              <CheckoutProduct key={index} Items={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full">
        <div>
          <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
            <p className="font-poppin font-normal text-[16px]">Subtotal</p>
            <p className="font-poppin font-normal text-[16px]">
              {" "}
              ${cartState.totalPrice.toLocaleString()}
            </p>
          </div>
          <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
            <p className="font-poppin font-normal text-[16px]">Shipping</p>
            <p className="font-poppin font-normal text-[13px]">Free</p>
          </div>
          <div className="flex items-start justify-between py-4">
            <p className="font-poppin font-normal text-[16px]">total:</p>
            <p className="font-poppin font-normal text-[16px]">
              {" "}
              ${cartState.totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-start justify-start">
          <div className=" flex items-start justify-between py-3">
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" />
              <p className="font-poppin font-normal text-[16px]">Bank</p>
            </div>
            <img src="" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 py-3">
            <input type="checkbox" />
            <p className="font-poppin font-normal text-[16px]">
              Cash on Delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:mt-6">
          <input
            type="text"
            placeholder="Coupon code"
            className="p-3 md::py-2 pl-2  w-full md:w-[100%] lg:w-[62%] border-black border-[1px] text-[15px]"
          />
          <a
            href="#"
            className="bg-[#492C02]  hover:border-[#492C02] hover:border-[1px] hover:bg-transparent hover:text-[#492C02] transition-all ease-in-out scale-100 rounded-[4px]  text-center text-white py-4 md:py-[13px] lg:py-[15px] px-5 w-[100%] lg:w-[35%] font-semibold text-[12px]"
          >
            Apply Coupon
          </a>
        </div>

        <button
          href="#"
          className="mt-8 bg-[#492C02] hover:border-[#492C02] hover:border-[1px] hover:bg-transparent hover:text-[#492C02] transition-all ease-in-out scale-100 rounded-[4px]  text-white py-4 md:py-[13px] px-3 w-[100%] lg:w-[35%] font-semibold text-[12px]"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Details;
