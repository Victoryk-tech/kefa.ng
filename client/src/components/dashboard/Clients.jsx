import React from "react";

const Clients = () => {
  return (
    <div>
      <div className=" md:overflow-auto rounded-lg shadow hidden md:block md:w-[500px] lg:overflow-hidden lg:w-full">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Details
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Details
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="w-20 p-3 text-sm text-gray-700">
                <a href="#" className="hover:underline font-bold text-blue-500">
                  10545
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                johnson@gmail.com
              </td>
              <td className="p-3 text-sm text-gray-700">10111</td>
              <td className="w-24 p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200">
                  Delivered
                </span>
              </td>
              <td className="w-24 p-3 text-sm text-gray-700">8/10/2024</td>
              <td className="w-32 p-3 text-sm text-gray-700">N34542</td>
              <td className=" text-center text-xl text-gray-700 cursor-pointer">
                ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* small screens */}
      <div className="grid grid-col-1 gap-4 md:hidden">
        <div className="bg-white p-4 space-y-2 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm">
            <div>
              <a href="#" className="hover:underline font-bold text-blue-500">
                {" "}
                10545
              </a>
            </div>
            <div className="text-gray-500">4/2/2024</div>
            <div>Status</div>
          </div>
          <div className="text-sm text-gray-700">Description</div>
          <div className="text-sm font-medium text-left">N67678</div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
