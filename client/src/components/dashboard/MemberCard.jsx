import React from "react";
import { FaChevronRight } from "react-icons/fa";
const MemberCard = () => {
  return (
    <div className="px-6 py-4 bg-white rounded-xl space-y-4">
      <div className="w-10 h-10">
        <img
          src="https://randomuser.me/api/portraits/women/15.jpg"
          alt=""
          className="w-full h-full object-contain rounded-full border-4 border-white"
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-sm font-bold">Mariam kem</h1>
        <h4 className="text-xs font-normal text-amber-800">
          johnson@gmail.com
        </h4>
        <h3 className="text-xs">Customer</h3>
      </div>
    </div>
  );
};

export default MemberCard;
