import React from "react";

const HomeProduct = ({ Product, getProducts }) => {
  return (
    <div className=" bg-white rounded-sm w-[123px] sm:w-[250px] sm:h-[280px] lg:h-[250px] h-[170px] lg:w-[220px]">
      <div className="flex flex-col items-start justify-start">
        <div className="h-1/2 w-full ">
          <img
            src={Product.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-2 space-y-2 w-full">
          <h1 className="text-md text-center font-semibold">{Product.title}</h1>
          <div className="flex items-center justify-start space-x-2">
            <p className="text-sm text-gray-400">N{Product.amount}</p>
            <p className="text-sm text-gray-300 ">N{Product.oldprice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
