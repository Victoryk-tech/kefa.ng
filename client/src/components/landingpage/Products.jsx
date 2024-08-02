import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./database/AllProducts";
const Products = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(4);
  console.log(process.env.NODE_ENV);
  let backendURL;
  if (process.env.NODE_ENV === "production") {
    backendURL = "https://kefa-ng.onrender.com/api/product";
  } else {
    backendURL = "http://localhost:8000/api/product";
  }
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${backendURL}`);
      console.log(response.data);
      console.log(backendURL);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showAll = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div className=" w-full">
      <div>
        {isLoading ? (
          "loading......."
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start gap-y-8 sm:gap-y-20">
              {products.length > 0 ? (
                products.slice(0, visible).map((product, index) => {
                  return (
                    <div className="">
                      <AllProducts
                        key={index}
                        Product={product}
                        getProducts={getProducts}
                      />
                    </div>
                  );
                })
              ) : (
                <div>There is no message</div>
              )}
            </div>
            <div className="">
              <button
                className="bg-[#492C02] rounded-[4px] hover:border-[#492C02] hover:border-[1px]  hover:text-[#492C02] hover:bg-transparent transition-all ease-in-out text-white py-2  w-[26%] md:w-[10%] font-semibold text-[16px]"
                onClick={showMore}
              >
                View all
              </button>
            </div>
            ;
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
