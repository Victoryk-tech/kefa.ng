import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { heroData } from "../../components/landingpage/database/heroData";
import { Link } from "react-router-dom";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  //animation on scroll trigger
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-stone-50">
      <div className="overflow-hidden slideshow relative">
        <div
          className=" lg:h-[70vh] h-[60vh] flex w-full slideshowSlider"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: "ease-in 600ms",
          }}
        >
          {heroData.map((data, index) => {
            return (
              <div
                key={index}
                className={` md:px-10  slide h-full w-full  flex-shrink-0 bg-no-repeat  object-right flex items-center justify-between`}
                //style={{ backgroundImage: `url(${data.image})` }}
              >
                <div
                  className=" flex flex-col justify-start items-start p-2 md:pl-5"
                  data-aos="fade-down"
                >
                  <div className="space-y-10 flex flex-col justify-center items-center font-medium text-[24px] lg:text-[50px] text-[#6b4343]">
                    <div>
                      <p data-aos="fade-up" className=" ">
                        {data.title}
                      </p>
                      <p className=" border-b-2 border-[#6b4343]">
                        {data.title2}
                      </p>
                    </div>
                    <button
                      to="login"
                      className="w-32 text-center rounded-md hover:bg-[#6b4343] p-3 text-[13px] text-[#6b4343] font-normal border-[#6b4343] border-[1px] hover:text-white transition-all ease-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="hidden md:block w-[50%]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center absolute right-0 left-0 bottom-0 space-x-2 ">
          {heroData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className={`slideshowDot${
                index === idx && " active"
              } space-x-2 rounded-full h-2 w-5 inline-block cursor-pointer bg-gray`}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-full bg-stone-200 py-6 text-center">
        <h3 className="text-[16px] font-medium leading-[39.7px]">
          SHOP OUR NEW PRODUCTS OF THE SEASON
        </h3>
      </div>
    </div>
  );
};

export default Hero;
