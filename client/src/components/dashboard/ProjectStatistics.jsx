import React from "react";
import { FaRegIdCard } from "react-icons/fa";

const ProjectStatistics = ({ percentage, circleWidth }) => {
  const radius = 85;
  return (
    <div>
      <div class="w-full bg-white rounded-xl p-4 md:p-6">
        <div className="space-y-4">
          <FaRegIdCard className="text-[34px] text-yellow-950" />
          <h1 className="text-[25px] font-semibold">N5000</h1>
          <h2 className="text-[18px] font-semibold text-amber-950 ">
            Payments
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectStatistics;
