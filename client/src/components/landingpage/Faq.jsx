import React, { useEffect, useState } from "react";
import { FaqData } from "../../components/landingpage/database/FaqData";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  };

  //animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section data-aos="fade-up" className="px-2 md:px-14 lg:px-16 py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="p-5">
          <p className="text-xl sm:text-3xl text-center font-semibold pb-3 font-poppins">
            Frequently asked questions
          </p>
        </div>
        <div data-aos="flip-up" className="w-[90%] md:[80%]">
          {FaqData.map((data, index) => {
            return (
              <div key={index} className="p-2 md:p-4 space-y-4 md:space-y-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-base md:text-xl pr-2">{data.title}</p>
                  <span className="transition-all duration-200">
                    {isOpen === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </span>
                </div>
                <div className=" text-gray ease-in-out transition-all duration-300">
                  {isOpen === index && (
                    <div className="text-sm md:text-base p-1">
                      {data.details}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
