import React from "react";
import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { RiFileSettingsFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="sticky top-0 bg-[#eceaea] shadow-sm flex justify-between items-center p-4 z-[999]">
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold text-[#492C02]">
          {/* {location.state.username} */}
        </p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#492C02]"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600 ">
            <GoBell size={28} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-[#492C02] text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              9
            </span>
          </button>
          <div className="group relative">
            <img
              className="w-8 h-8 rounded-full border-4 border-[#492C02]"
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt=""
            />

            <div className="hidden absolute top-10 right-0 group-hover:block bg-white py-2 px-5 rounded-md">
              <div className="space-y-3">
                <div className="flex flex-col items-center justify-center space-y-1 cursor-pointer">
                  <img
                    className="w-10 h-10 rounded-full border-4 border-[#492C02]"
                    src="https://randomuser.me/api/portraits/women/50.jpg"
                    alt=""
                  />
                  <h1 className=" text-nowrap text-amber-800 text-sm font-bold">
                    Anna Jones
                  </h1>
                  <p className="text-xs font-semibold">Admin</p>
                </div>
                <div space-y-1>
                  <div className="cursor-pointer px-2 flex items-center justify-center gap-x-3">
                    <CiSettings className="text-amber-800" />
                    <p className="text-sm text-amber-950 hover:underline">
                      Settings
                    </p>
                  </div>
                  <div className="cursor-pointer px-2 flex items-center justify-center gap-x-3">
                    <LuLogOut className="text-amber-800 text-sm" />
                    <p className="text-sm text-amber-950 hover:underline">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
