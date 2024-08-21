import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

//import deliver from "../assets/deliver.png";

//import fivestar from "../assets/fivestar.png";
import { BsBag } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    amount: "",
    oldprice: "",
    rating: "",
  });

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/product/${id}`
      );

      setProduct({
        title: response.data.title,
        description: response.data.description,
        image: response.data.image,
        rating: response.data.rating,
        amount: response.data.amount,
        oldprice: response.data.oldprice,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:8000/api/product/${id}`, product);
      toast.success("You have updated this Blog post successfully");
      Navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  // const items = products.find((Product) => Product.id === parseInt(id));
  // console.log(items);
  const { amount, title, image, quantity, description, oldprice, rating } =
    product;
  return (
    <div className="w-full h-auto px-2 lg:pl-16 py-10 gap-3">
      <div className="flex items-start justify-start font-poppin font-normal text-[14px] md:text-[16px] space-x-3 pb-10">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p>Chair</p>
        <p>/</p>

        <p>{title}</p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col  md:flex-row items-start md:items-center justify-center md:justify-between w-full lg:h-[100vh]">
          <div className="w-full h-full lg:w-[100%] lg:h-[90%]">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start justify-start py-32 md:py-0 lg:px-48 space-y-5 lg:w-[100%] lg:h-[80%]">
            <div className="space-y-2">
              <p className="font-inter font-semibold text-[24px]">{title}</p>
              <div className="flex items-center justify-center space-x-2 font-normal text-[14px]">
                {/* <img src={fivestar} alt="" /> */}
                <p>(150 Reviews)</p>
                <p className="text-xl">|</p>
                <p className="text-[#00FF66]">in stock</p>
              </div>
              {/* <p className="font-inter font-medium text-[24px]">${amount}</p> */}
            </div>

            <div className="border-b-[1px] border-black pb-6 w-full">
              <p className="font-poppin font-normal text-[14px]">
                {description}
              </p>
            </div>
            <div className="flex items-start justify-between w-full">
              <div className=" flex items-center border-black border-[1px]">
                <p className=" px-4 border-r-[1px] border-black text-[38px] lg:text-[30px]  ">
                  -
                </p>
                <p className="py-2 px-8 border-r-[1px] border-black text-[26px] font-medium">
                  0
                </p>
                <p className="px-4 text-[38px]">+</p>
              </div>
              <button className="py-4 w-[42%] md:w-[36%]  bg-[#FF8933] text-white hover:bg-white hover:text-[#FF8933] hover:scale-100 transition-all ease-in hover:border-[#FF8933] hover:border-[1px]">
                Buy Now
              </button>
            </div>

            <div>{/* <img src={deliver} alt="" /> */}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
