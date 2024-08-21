import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const CartItems = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="w-full h-full px-2 md:px-4 lg:px-20 py-10">
      <div className="text-[11px] flex items-start justify-start font-poppin font-normal md:text-[16px] gap-1 lg:space-x-3 pb-10">
        <Link to="shop">
          <p>Home</p>
        </Link>
        <p>/</p>

        <p>Cart</p>
      </div>

      <div>
        {cartState.cart.length > 0 ? (
          <div className="flex flex-col items start justify-start w-full">
            <nav className="flex items-start justify-between py-6 px-3 lg:justify-start md:gap-[142px] lg:gap-[150px] lg:pl-[10px] text-center p-4 shadow-md ">
              <p className="lg:w-[20%]">Product</p>
              <p className="md:pl-3 lg:pl-0">Price</p>
              <p className="hidden lg:block">Quantity</p>
              <p className="block lg:hidden">Qty</p>
              <p className="hidden lg:block">Subtotal</p>
              <p className="block lg:hidden">S/t</p>

              <p className="  md:block"></p>
            </nav>

            <div className="pt-5  w-full">
              {cartState.cart.map((item, index) => {
                return (
                  <div className="">
                    <CartProduct key={index} cartItems={item} />
                  </div>
                );
              })}

              <div className="flex flex-row items-center justify-between w-full mt-4">
                {" "}
                <button className="border-[#492C02] rounded-[4px]  text-center text-[#492C02] transition-all ease-in hover:bg-[#492C02] hover:text-white border-[1px] hover:scale-100 py-4 md:py-5 lg:py-[13px] px-5 w-[37%] md:w-[30%] lg:w-[16%] font-semibold text-[12px]">
                  <Link to="/">Return to Shop</Link>
                </button>
                <button className="bg-[#492C02] rounded-[4px]  text-center text-white transition-all ease-in hover:bg-white hover:text-[#492C02] hover:border-[#492C02] hover:border-[1px] hover:scale-100 py-4 md:py-5 lg:py-[13px] px-5 w-[37%] md:w-[30%] lg:w-[16%] font-semibold text-[12px]">
                  Update Cart
                </button>
              </div>
              <div className=" flex flex-col md:flex-row items-start justify-between pt-16 w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 w-full md:w-[60%] lg:w-[75%] ">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="p-3 md::py-2 w-[100%] lg:w-[35%] border-black border-[1px] text-[15px]"
                  />
                  <button className="bg-[#492C02] hover:border-[#492C02] hover:text-[#492C02] hover:border-[1px] hover:bg-transparent rounded-[4px] text-center text-white py-4 md:py-[15px] px-5 w-[100%] md:w-[70%] lg:w-[20%] font-semibold text-[12px]">
                    Apply Coupon
                  </button>
                </div>

                <div className="border-2 p-2 w-full my-14 md:mt-0 md:w-[35%] border-black">
                  <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
                    <p className="font-poppin font-normal text-[16px]">
                      Subtotal
                    </p>
                    <p className="font-poppin font-normal text-[16px]">
                      ${cartState.totalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-start justify-between border-b-[0.3px] border-black py-4">
                    <p className="font-poppin font-normal text-[16px]">
                      Shipping
                    </p>
                    <p className="font-poppin font-normal text-[13px]">Free</p>
                  </div>
                  <div className="flex items-start justify-between py-4">
                    <p className="font-poppin font-normal text-[16px]">
                      total:
                    </p>
                    <p className="font-poppin font-normal text-[16px]">
                      ${cartState.totalPrice.toLocaleString()}
                    </p>
                  </div>

                  <Link
                    to="shop/cart/checkout"
                    className="bg-[#492C02] hover:bg-transparent rounded-[4px] cursor-pointer text-center ml-20 md:ml-8  text-white hover:text-[#492C02]  hover:border-[1px] hover:border-[#492C02] hover:scale-100 transition-all ease-in py-4 md:py-[13px] px-4 w-[53%] md:w-[75%] font-semibold text-[12px]"
                  >
                    Procced to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-28">
            <div className="flex flex-col items-center space-y-4 bg-slate-100 text-center p-8 sm:p-16 ">
              <h1 className="font-semibold text-xl ">Your Cart is empty</h1>
              <p className="p-2 bg-[#492C02]  rounded-sm hover:border-[#492C02] hover:border-[1px] hover:text-[#492C02] hover:bg-transparent text-white font-poppin font-medium">
                <Link to="/">Start Shopping</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
