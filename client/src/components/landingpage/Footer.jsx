import React from "react";
import send from "../../assets/sendicon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#5B3702] text-white ">
      <div className="px-2 md:px-4 lg:px-10 py-20 gap-y-10 flex flex-col sm:flex-row items-start justify-between w-full ">
        <div className="flex items-start justify-between w-full sm:pr-10 lg:pr-28">
          <div className="space-y-[24px] font-poppin">
            <h1 className="font-medium text-[28px] leading-7">Kefa.NG</h1>
            <p className="font-normal text-[16px] font-poppin leading-[24px]">
              Get 10% off your first order
            </p>
            <div className="flex items-start justify-between py-3 px-2 w-[90%]  lg:w-full border-white border-[1.5px]  bg-transparent text-[16px] font-normal font-poppin">
              <input
                type="text"
                placeholder="Enter your email"
                className=" outline-none bg-transparent w-[100%]"
              />
              <img src={send} alt="" className="" />
            </div>
          </div>
          <div className="space-y-[24px] font-poppin">
            <h1 className="font-medium text-[20px] leading-7">Services</h1>

            <p className="font-normal text-[16px]">Cart</p>
            <p className="font-normal text-[16px]">Clothes</p>

            <p>
              {" "}
              <Link to="/board" className="font-normal text-[16px]">
                {" "}
                Bags{" "}
              </Link>
            </p>

            <p className="font-normal text-[16px]">Hoodies</p>
          </div>
        </div>
        <div className="flex items-start justify-between w-full lg:pl-20 sm:pl-10">
          <div className="space-y-[24px] font-poppin">
            <h1 className="font-medium text-[20px] leading-7">About Kefa</h1>

            <p className="font-normal text-[16px]">About Us</p>
            <p className="font-normal text-[16px]">Terms and Conditions</p>
            <p className="font-normal text-[16px]">Payment Guidelines</p>
            <p className="font-normal text-[16px]">Return Policy</p>
            <p className="font-normal text-[16px]">Return $ Refund Policy</p>
          </div>
          <div className="space-y-[24px] font-poppin">
            <h1 className="font-medium text-[20px] leading-7">Need Help?</h1>

            <p className="font-normal text-[16px]">Chat with us</p>
            <p className="font-normal text-[16px]">Contact us</p>
            <p className="font-normal text-[16px]">Help center</p>
          </div>
        </div>
      </div>
      <div className="py-2 flex items-center justify-center text-[16px] font-poppin font-normal border-t-[0.5px] border-white">
        <p className="leading-6">&copy; Kefa 2024. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
