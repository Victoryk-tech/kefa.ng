import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import { flash } from "./database/flash";
import AOS from "aos";
import "aos/dist/aos.css";

const FlashSales = () => {
  const [caseStudy, setCaseStudy] = useState("shirt");
  console.log(flash);

  const activeLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-bold text-[18px] relative after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";
  const normalLink =
    "relative flex cursor-pointer items-center justify-center space-x-1 tracking-[1px] text-[18px] leading-[20px] font-bold hover:text-[#6b4343] after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  //mapping category
  const tags = Array.from(new Set(flash.map((tag) => tag.category)));
  const handleClick = (design) => {
    setCaseStudy(design);
  };

  //display filtered category
  const displayCategory = caseStudy
    ? flash.filter((item) => item.category === caseStudy)
    : [];

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="px-2 sm:px-4 lg:px-10 py-10">
      {/* <div className="border-l-[24px] border-[#492C02] pl-4  font-inter">
        <h1 className="font-semibold text-[16px] text-[#492C02]">
          Flash Sales
        </h1>
        <CountDown />
      </div> */}
      <div className="text-center py-8 space-y-3">
        <h1 className="text-[24px] font-bold lg:text-[33px] lg:leading-[38.9px]">
          NEW COLLECTIONS
        </h1>
        <p className="text-[16px] font-normal">
          What's New? Check Out Our New Products and Upgrade Your Style With Our
          New Arrivals.
        </p>
      </div>

      {/* head */}

      <div className="flex items-center justify-start space-x-4 w-full ">
        {tags &&
          tags.map((tag, index) => {
            return (
              <div
                data-aos="fade-right"
                key={index}
                onClick={() => handleClick(tag)}
                className={`text-nowrap ${
                  caseStudy === tag ? activeLink : normalLink
                } `}
              >
                {tag}
              </div>
            );
          })}
      </div>

      <div>
        {caseStudy && displayCategory.length ? (
          <div className=" font-oswald text-[#6b4343] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center pt-16 lg:px-8 gap-y-6 md:gap-4 ">
            {displayCategory.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="top-center"
                  key={index}
                  className="  sm:w-48  lg:w-52 md:h-72 text-sm md:text-normal shadow-sm"
                >
                  <div className="h-48 md:h-48 lg::h-52 w-full">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full object-contain rounded-3xl"
                    />
                  </div>
                  <div className="h-[40%] space-y-1 py-2 text-center">
                    <h3 className="text-sm font-semibold">{data.brand}</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <h3 className=" text-sm font-medium leading-tight">
                        N{data.amount}
                      </h3>
                      <h3 className=" text-sm font-normal line-through">
                        N{data.oldprice}
                      </h3>
                    </div>
                    {/* <h3 className=" text-sm font-semibold">{data.category}</h3> */}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading.......</div>
        )}
      </div>
    </div>
  );
};

export default FlashSales;
