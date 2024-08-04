import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import tick from "../../assets/tick.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {/* import tick and not tick */}
        <img
          src={isComplete ? tick : ""}
          alt=""
          className={`w-5  rounded-full ${
            isComplete ? "bg-red-700" : "border-amber-900 border-2 p-2"
          }`}
        />
        <p
          className={`text-amber-900 ml-4 text-[17px]  ${
            isComplete ? "line-through  text-red-700" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <GoTrash
        onClick={() => {
          deleteTodo(id);
        }}
        className="text-lg cursor-pointer text-red-900 hover:text-yellow-600"
      />
    </div>
  );
};

export default TodoItems;
