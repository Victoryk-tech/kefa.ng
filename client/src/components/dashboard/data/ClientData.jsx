import React from "react";

const ClientData = ({ Users, getUsers }) => {
  return (
    <div className="w-full">
      <div className="md:overflow-auto rounded-lg shadow hidden md:block md:w-[500px] lg:overflow-hidden lg:w-full">
        <table className="w-full">
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="w-24 p-3 text-sm text-amber-700">
                <a
                  href="#"
                  className="hover:underline font-bold text-amber-700"
                >
                  10545
                </a>
              </td>
              <td className="w-80 p-3 text-sm text-gray-700 whitespace-nowrap">
                Anna Joe
              </td>
              <td className="w-80 p-3 text-sm text-gray-700"> {Users.email}</td>

              <td className="w-24 p-3 text-sm text-gray-700">8/10/2024</td>
              <td className="w-24 p-3 text-sm text-gray-700">N34542</td>
              <td className=" text-center text-xl text-gray-700 cursor-pointer px-2">
                ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* small screens */}
      <div className="grid grid-col-1 md:hidden">
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

export default ClientData;
