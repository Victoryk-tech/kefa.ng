import React, { useContext, useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import "react-responsive-modal/styles.css";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUsers } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";

import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import RegisteredUsers from "./RegisteredUsers";

const Users = () => {
  const { userTotal, getUserTotal, getUsers } = useContext(UserContext);
  const { totalProduct } = useContext(ProductContext);
  const [counter, setCounter] = useState(false);

  //check active user
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    if (token && userId) {
      getUsers();
      getUserTotal();
    }
  }, []);

  return (
    <div>
      <section className="md:p-5 p-2 md:w-full shadow ">
        {/* dashboard overview */}
        <div className="md:p-2 font-semibold md:text-xl md:my-3 ">
          Dashboard Overview
        </div>
        <div className="py-15 hidden md:block">
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            {counter && (
              <div className="flex items-center justify-between md:justify-around p-5 md:px-10 rounded bg-gray/5">
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold ">
                  <div className="relative">
                    <CountUp
                      start={0}
                      end={totalProduct}
                      duration={2}
                      className="text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3 -right-2"
                    />
                    <BsCartCheck size={25} />
                  </div>
                  <p className="text-sm lg:text-lg count flex items-center">
                    {" "}
                    Avaliable Stock
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <div className="relative">
                    <CountUp
                      start={0}
                      end={userTotal}
                      duration={2}
                      className="text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3 -right-2"
                    />
                    <FaUsers size={25} />
                  </div>
                  <p className="text-sm lg:text-lg flex items-center">
                    Registered Users
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <div className="relative">
                    <CountUp
                      start={0}
                      end={50}
                      suffix="+"
                      duration={2}
                      className="text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2 -right-7"
                    />
                    <IoPricetagOutline size={25} />
                  </div>
                  <p className="text-sm lg:text-lg flex items-center">Orders</p>
                </div>
              </div>
            )}
          </ScrollTrigger>
        </div>

        {/* Registered Users */}
        <RegisteredUsers />
      </section>
    </div>
  );
};

export default Users;
