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
      <h1 className="text-xl font-bold text-amber-950">Platform</h1>
      <div className="p-1 grid grid-cols-2 gap-2">
        <div className="space-y-1 text-gray-500">
          <h1 className="text-lg font-bold text-amber-700">58</h1>
          <p className="flex items-center space-x-2 text-amber-950">
            <CiGlobe /> <span>Clients</span>
          </p>
        </div>
        <div className="space-y-1 text-gray-500">
          <h1 className="text-lg font-bold text-yellow-600">87</h1>
          <p className="flex items-center space-x-2 text-amber-950">
            <FaApple /> <span>Orders</span>
          </p>
        </div>
        <div className="space-y-1 text-gray-500">
          <h1 className="text-lg font-bold text-purple-300">58</h1>
          <p className="flex items-center space-x-2 text-amber-950">
            <DiAndroid /> <span>Products</span>
          </p>
        </div>
        <div className="space-y-1 text-gray-500">
          <h1 className="text-lg font-bold text-amber-900">58</h1>
          <p className="flex items-center space-x-2 text-amber-950">
            <LuMessageSquare /> <span>Messages</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
