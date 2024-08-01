import React from "react";

const CheckoutProduct = ({ Items }) => {
  const { image, title, amount, quantity } = Items;

  return (
    <div className="flex items-center justify-between py-2 w-full">
      <div className="flex items-center justify-center gap-2">
        <img src={image} alt="" className="w-16 h-16 object-contain" />
        <p className="font-poppin font-normal text-[16px]">{title}</p>
      </div>
      <p className="font-poppin font-normal text-[16px]">
        ${`${parseFloat(quantity * amount).toLocaleString()}`}
      </p>
    </div>
  );
};

export default CheckoutProduct;
