import React from "react";
import cloth from "../../assets/cloth.png";
import cloth1 from "../../assets/clothi1.png";

import cloth3 from "../../assets/store2.jpg";
import delivery from "../../assets/deliveryicon.png";
import customer from "../../assets/customer.png";
import tick from "../../assets/tick.png";
const Services = () => {
  return (
    <div>
      <div className="w-full bg-stone-200 py-6 text-center">
        <h3 className="text-[16px] font-medium leading-[39.7px]">
          WE PROVIDE YOU WITH TOP-NOTCH QUALITY GOODS AND SERVICES
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center  py-14">
        <div className="text-center space-y-2 py-6">
          <h1 className="text-[18px] md:text-[32px] font-bold">OUR SERVICES</h1>
          <p className="text-[16px]">We are dedicated to serve you better.</p>
        </div>
        <div
          className="bg-no-repeat object-cover  w-full py-6 md:px-10"
          style={{ backgroundImage: `url(${cloth3})` }}
        >
          <div className=" flex flex-col items-center justify-center filter  w-full">
            <div className=" flex flex-col md:flex-row items-center justify-center space-y-3 md:space-x-2 md:space-y-0">
              <div className="flex flex-col items-center justify-center gap-y-5 backdrop-brightness-50 text-white w-[300px] md:w-[240px] lg:w-[300px] h-[180px] md:h-[225px]">
                <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
                  <img src={customer} alt="" />
                </div>
                <div className="text-center">
                  <h2 className="font-poppin text-[20px] md:text-[18px] lg:text-[20px] font-semibold">
                    CUSTOMER'S SATISFACTION
                  </h2>
                  <p className="font-poppin text-[14px] font-light">
                    Customer's satisfaction is our priority
                  </p>
                </div>
              </div>
              <div className="backdrop-brightness-50 text-white  flex flex-col items-center justify-center gap-y-5 w-[300px] md:w-[240px] lg:w-[300px] h-[180px] md:h-[225px]">
                <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
                  <img src={delivery} alt="" />
                </div>
                <div className="text-center">
                  <h2 className="font-poppin text-[20px] md:text-[18px] lg:text-[20px] font-semibold">
                    FREE AND FAST DELIVERY
                  </h2>
                  <p className="font-poppin text-[14px] font-light">
                    Free delivery for all orders over $140
                  </p>
                </div>
              </div>
              <div className="backdrop-brightness-50 text-white flex flex-col items-center justify-center gap-y-5 w-[300px] md:w-[240px]  lg:w-[300px] h-[180px] md:h-[225px]">
                <div className="rounded-[50%] bg-[#5B3702] text-white p-2">
                  <img src={tick} alt="" />
                </div>
                <div className="text-center">
                  <h2 className="font-poppin text-[20px] md:text-[18px] lg:text-[20px] font-semibold">
                    HIGH QUALITY PRODUCTS
                  </h2>
                  <p className="font-poppin text-[14px] font-light">
                    We deliver only the best quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-stone-200 py-6 text-center">
        <h3 className="text-[16px] font-medium leading-[39.7px]">
          SEE SOME FREQUENTLY ASKED QUESTIONS
        </h3>
      </div>
    </div>
  );
};

export default Services;
