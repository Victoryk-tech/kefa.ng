import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import unleashData from "../../components/landingpage/database/reviews";
import { useEffect, useRef, useState } from "react";

const Reviews = () => {
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
          prevIndex === unleashData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="py-24 px-4 md:px-6 lg:pl-32  w-full h-full font-oswald">
      <div className=" flex flex-col justify-center h-full items-center ">
        <div className="overflow-hidden no-scrollbar slideshow w-[96%] sm:w-[70%]">
          <div
            className="flex w-full items-center slideshowSlider"
            style={{
              transform: `translate3d(${-index * 100}%, 0, 0)`,
              transition: "ease-in 500ms",
            }}
          >
            {unleashData.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{}}
                  className="shrink-0 flex flex-col justify-start
                   items-start w-full min-h-full slide "
                >
                  <div className="pb-8">
                    <p className="text-lg font-normal">PEOPLE ARE TALKING</p>
                  </div>
                  <div className=" rounded flex flex-col  items-start justify-between w-full">
                    <div className="w-full space-y-5">
                      <p className="text-[17px] text-wrap font-poppins lg:leading-[32.5px]">
                        "...{data.description}"
                      </p>

                      <div className="flex items-center justify-center space-x-3">
                        <div className=" w-24 h-24 rounded-full">
                          <img
                            className="h-full w-full object-contain rounded-full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <p className="">
                          <p className=" font-bold font-poppins">{data.name}</p>
                          <p className="">{data.title}</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            {unleashData.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setIndex(idx)}
                className={`slideshowDot${
                  index === idx && " active"
                } mx-1 rounded-full h-1 w-5 inline-block cursor-pointer bg-gray`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
