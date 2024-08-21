import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline, IoHomeOutline } from "react-icons/io5";
import { FiGlobe, FiPhone, FiShoppingCart, FiUser } from "react-icons/fi";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import TopHeader from "./TopHeader";
import { CiMail, CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [navHome, setNavHome] = useState(false); //navHome is currently false
  const [isActive, setIsActive] = useState(false);

  const handleNavHome = () => {
    setNavHome(!navHome);
    // console.log(navHome);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const actLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-semibold text-[12px] relative after:content-[''] after:bg-[#6b4343] after:h-[2px] after:w-[100%] after:left-0 after:bottom-[-10px] after:rounded-xl after:absolute";

  const norLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[13px]  font-semibold hover:text-[#6b4343] after:content-[''] after:bg-[#6b4343] after:h-[2px] after:w-[0%] after:left-0 after:bottom-[-10px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  const activeLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";
  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[15px] leading-[20px] font-bold hover:text-[#6b4343] after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <div
      className={`${
        isActive && "inset-0 fixed transition-all duration-500 "
      }  w-full z-[999] text-[#6b4343]`}
    >
      <TopHeader />

      <div className=" bg-stone-50 space-y-10 px-2 md:px-4 lg:px-20 pt-4 md:py-4 flex flex-col items-center justify-between w-full shadow h-auto ">
        <div className="flex items-start justify-between w-full">
          <div className="hidden md:flex space-x-2">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
          <div className="flex md:hidden">
            {/* handbugger */}
            <div className="flex flex-col md:hidden relative ">
              <div onClick={handleNavHome}>
                <CiMenuBurger className="text-3xl hover:text-[#8A50F0] font-semibold" />
              </div>

              <div className="">
                {navHome ? (
                  <div className="absolute  inset-0   bg-white z-[999] w-screen h-screen  flex flex-col items-start justify-start transition-all ease-out shadow-sm">
                    <div
                      onClick={handleNavHome}
                      className="w-full flex items-end justify-end pr-5"
                    >
                      <IoCloseCircleOutline className="text-3xl hover:text-[#8a50f0] cursor-pointer" />
                    </div>

                    <div className="flex flex-col items-center justify-center w-full pt-20">
                      <div className="flex flex-col items-center justify-center text-center gap-8 py-6">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                          onClick={scrollToTop}
                        >
                          Home
                        </NavLink>

                        <NavLink
                          to="blog"
                          onClick={scrollToTop}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          Blog
                        </NavLink>
                        <NavLink
                          to="contact"
                          onClick={scrollToTop}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          Contact
                        </NavLink>
                        <NavLink
                          to="about"
                          onClick={scrollToTop}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          About
                        </NavLink>
                      </div>

                      <div className="space-y-8 py-4">
                        <Link
                          to="login"
                          href=""
                          className="font-bold border-[#6b4343] border-[0.3px] px-24 py-4 rounded-xl text-[#6b4343] hover:shadow-[0_0_20px_#6b4343] hover:bg-[#6b4343] hover:text-white transition-all ease-out shadow-sm cursor-pointer"
                        >
                          Log In
                        </Link>

                        <a
                          href="mailto:kemelevictory3802@gmail.com"
                          className="flex items-center justify-center space-x-2 border-[#6b4343] border-[0.3px] px-16 py-3 rounded-xl text-[#6b4343] hover:shadow-[0_0_20px_#6b4343] hover:bg-[#6b4343] hover:text-white transition-all ease-out shadow-sm cursor-pointer"
                        >
                          <p className="text-[14px] font-bold leading-7">
                            Message
                          </p>
                          <CiMail className="text-xl font-bold leading-7" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* headerlogo */}
          <div className="text-center space-y-3">
            <h1 className="text-[20px] font-bold md:text-[32px] md:leading-[36.7px]">
              KEFA.NG
            </h1>
            <p className="hidden md:block text-sm text-[#6b4343] font-normal">
              FASHION & MORE
            </p>
          </div>

          {/* login/signup */}
          <div className="hidden md:flex items-center justify-center ">
            <NavLink
              to="signup"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? actLink : norLink)}
            >
              <p>Sign Up</p>
            </NavLink>
            <p>/</p>
            <NavLink
              to="login"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? actLink : norLink)}
            >
              <p>Log In</p>
            </NavLink>
          </div>
        </div>
        <div>
          <nav className="hidden  md:flex items-center justify-center gap-x-6  font-oswald">
            <NavLink
              to="/"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p>Home</p>
              <IoHomeOutline />
            </NavLink>
            <NavLink
              to="login"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p> Shop</p>
              <FiShoppingCart />
            </NavLink>

            <NavLink
              to="blog"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p> Blog</p>
              <FiGlobe />
            </NavLink>

            <NavLink
              to="about"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p>About</p>
              <FiUser />
            </NavLink>
            <NavLink
              to="contact"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p>Contact</p>
              <FiPhone />
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
