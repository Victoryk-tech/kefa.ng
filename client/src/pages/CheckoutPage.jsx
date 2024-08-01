import React from "react";
import BillingDetails from "../components/checkout/BillingDetails";
import Details from "../components/checkout/Details";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="py-8 px-2 sm:px-4 lg:px-24 bg-[#fff]">
      <div className="text-[11px] flex items-start justify-start font-poppin font-normal md:text-[16px] gap-1 lg:space-x-3 pb-10">
        <Link to="/">Home</Link>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p>Product</p>
        <p>/</p>
        <p>View Cart</p>
        <p>/</p>
        <p>Checkout</p>
      </div>
      <div className="w-full h-auto sm:gap-5 bg-[#fafafa]flex flex-col sm:flex md:flex-row items-start md:items-center justify-start md:justify-start">
        <BillingDetails />
        <Details />
      </div>
    </div>
  );
};

export default CheckoutPage;
