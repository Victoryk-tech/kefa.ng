import React from "react";
import { CiMail } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="flex items-start justify-between  font-oswald  bg-stone-200 text-[#6b4343]">
      <div className="flex flex-col items-start justify-start py-10 space-y-10 w-full md:w-[40%] lg:pl-16  px-4 md:px-6  ">
        <div className="space-y-5">
          <h1 className="font-bold text-[36px] leading-tight">Kefa</h1>
          <div className="space-y-2 text-[16px] font-medium lead">
            <h3 className="font-bold leading-[37.8px]">
              Ikeja City Mall Obafemi Awolowo Wy, Alausa, Ojodu
            </h3>
            <h4>Phone: 08140732424</h4>
            <h4>Email: favour@gmail.com</h4>
          </div>
        </div>

        <div className="flex items-start justify-between  w-full">
          <div className="space-y-4 text-[16px] font-medium">
            <h1 className="text-[18px] font-bold">Web Info</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms of Policy</p>
          </div>
          <div className="space-y-4 text-[16px] font-medium">
            <h1 className="text-[18px] font-bold">Categories</h1>
            <p>Suits</p>
            <p>Jackets</p>
            <p>Men Wears</p>
            <p>Shoes</p>
            <p>Sun Shades</p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-start justify-start text-[20px] border-b-[1px] border-black py-2 w-full">
            <input
              type="Email"
              name="Email"
              placeholder="Enter your email address"
              className="w-full outline-none border-none bg-transparent text-black text-[15px] placeholder:text-sm placeholder:text-black"
            />
            <CiMail />
          </div>
          <div className="flex items-center justify-center text-lg space-x-2">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <p className="text-sm leading-snug text-center w-full">
          All rights reserved by &copy; Kefa 2024.
        </p>
      </div>
      <div className="hidden md:block md:w-[400px] lg:w-[650px] h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.261787669079!2d3.355557773504906!3d6.614361722103855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b65ba86e15%3A0x3ae060fb3436c3ad!2sIkeja%20City%20Mall!5e0!3m2!1sen!2sng!4v1724187391653!5m2!1sen!2sng"
          width="100%"
          height="650"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
