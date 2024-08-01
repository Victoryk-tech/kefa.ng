import React, { useEffect, useState } from "react";

const COUNTDOWN_TARGET = new Date("July 10,2024 00:00:00");
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};
const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex items-center justify-center text-center">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="flex items-center justify-center">
              <div className="" key={label}>
                <span className="font-medium text-[12px]">
                  <small>{label}</small>{" "}
                </span>

                <div className="value">
                  <span className="font-bold text-[24px] lg:text-[32px]">
                    {value}
                  </span>
                </div>
              </div>
              <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-3 lg:pt-5 px-3">
                :
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountDown;
