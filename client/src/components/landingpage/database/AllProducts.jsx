import React, { useContext } from "react";
import { CartContext } from "../../context/ContextProvider";
import { BsBag } from "react-icons/bs";
import fivestar from "../../../assets/fivestar.png";
import { Link } from "react-router-dom";

const AllProducts = ({ Product, getProducts }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const { rating, oldprice, amount, title, image, id } = Product;

  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "Add_To_Cart", payload: item });
    toast.success("product added successfully");
  };
  return (
    <div className="flex flex-col justify-start items-start bg-white rounded-sm shadow-sm hover:shadow-lg w-[160px] sm:w-[230px] lg:w-[190px] lg:h-[193px] h-[240px] hover:scale-95 ease-in-out transition-all">
      <div className="flex items-center justify-center w-full h-1/2">
        <Link to={`/productDetails/${Product._id}`}>
          <img src={image} alt="" className="w-full h-full object-contain" />
        </Link>
      </div>

      <div className=" w-full bg-[#F5F5F5] px-2 py-2">
        <div className="flex flex-col items-center justify-center py-2">
          <h2 className="text-[14px] md:text-[16px] font-medium">{title}</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] md:text-[16px] text-[#DB4444]">
              N{amount}
            </p>
            {/* <p className="text-[14px] md:text-[16px] line-through">
          ${oldprice}
        </p> */}
          </div>
          <div
            className="text-[20px] hover:shadow-lg text-center cursor-pointer font-[900] bg-[#492C02] p-[8px] rounded-3xl text-white hover:bg-[#492C02] hover:cursor-pointer transition-none ease-out"
            onClick={() => addToCart(Product)}
          >
            <BsBag />
          </div>
        </div>
        <div className="flex items-start justify-start py-1">
          <img src={fivestar} alt="" />
          <p className="text-[14px] md:text-[16px]">({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
