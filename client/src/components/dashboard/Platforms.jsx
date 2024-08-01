import React from "react";
//icons
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaApple, FaTabletAlt } from "react-icons/fa";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { DiAndroid } from "react-icons/di";

const Platforms = () => {
  return (
    <div className="px-5 py-2 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Platform</h1>
      <div className="p-2 grid grid-cols-2 gap-2">
        <div className="space-y-2 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <CiGlobe /> <span>Clients</span>
          </p>
        </div>
        <div className="space-y-2 text-gray-500">
          <h1 className="text-2xl font-bold">87</h1>
          <p className="flex items-center space-x-2">
            <FaApple /> <span>Orders</span>
          </p>
        </div>
        <div className="space-y-2 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <DiAndroid /> <span>Products</span>
          </p>
        </div>
        <div className="space-y-2 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <LuMessageSquare /> <span>Messages</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
