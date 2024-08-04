import React, { useState } from "react";

// ICONS //
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
// ICONS //

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/board/home", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/board/orders", name: "Orders", icon: TbUsers },
    { id: 3, path: "/board/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/board/products", name: "Products", icon: FaSuitcase },
    { id: 5, path: "/board/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/board/plans", name: "Work Plan", icon: LuCalendar },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white">
      {/* logo */}
      <div className="mb-8">
        <Link to="/" className="flex">
          <img src="/logo_mini.svg" className="w-8 flex md:hidden" />
          <h1 className="font-bold text-[24px] font-inter hover:cursor-pointer text-amber-900 hidden md:flex">
            Kefa.ng
          </h1>
        </Link>
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-orange-100 text-yellow-700" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-amber-800 to-yellow-950 rounded-full">
          {" "}
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
