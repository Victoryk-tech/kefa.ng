import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Create = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [oldprice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      image === "" ||
      description === "" ||
      rating === "" ||
      oldprice === "" ||
      amount === ""
    ) {
      alert("please fill the form");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/api/product", {
        title: title,

        description: description,
        amount: amount,
        oldprice: oldprice,
        rating: rating,
        image: image,
      });

      //   toast.success(`save ${response.data.title} successfully`);

      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="py-5 px-2 sm:p-5 h-screen ">
      <div className="flex items-center justify-center w-full">
        <form
          action="form"
          onSubmit={saveProduct}
          className="flex flex-col items-start space-y-6  w-full"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="pl-2 w-full sm:w-80 py-3 outline-none text-[13px] shadow-md border-amber-700 rounded-lg border-[1px] bg-transparent"
          />

          <div className="grid grid-cols-3 space-x-2">
            <input
              type="Number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              className="text-[13px] shadow-md border-amber-700 bg-transparent py-3 rounded-lg pl-2   outline-none  border-[1.3px]"
            />
            <input
              type="Number"
              value={oldprice}
              onChange={(e) => setOldPrice(e.target.value)}
              placeholder="oldprice"
              className="pl-2  text-[13px] rounded-lg shadow-md border-amber-700 bg-transparent py-3 outline-none  border-[1.3px]"
            />

            <input
              type="Number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="amount"
              className="pl-2  text-[13px] rounded-lg shadow-md border-amber-700 bg-transparent py-3 outline-none  border-[1.3px]"
            />
          </div>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={6}
            className="pl-2 w-full sm:w-80  outline-none text-[13px] rounded-lg shadow-md border-amber-700 bg-transparent py-3 border-[1.3px]"
          ></textarea>

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="pl-2 w-full sm:w-80  outline-none text-[13px] rounded-lg shadow-md border-amber-700 bg-transparent py-3 border-[1px]"
          />

          {!isLoading && (
            <button className=" border-[1px] w-24 text-[13px] rounded-lg shadow-md border-amber-700 bg-transparent py-3 hover:bg-[#5B3702] hover:border-none hover:outline-none hover:text-white hover:shadow-md transition-all ease-out">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Create;
