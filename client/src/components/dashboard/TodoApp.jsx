import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { CiBoxList } from "react-icons/ci";

const TodoApp = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : {}
  );
  const inputRef = useRef();
  //   add text
  const add = () => {
    const inputText = inputRef.current.value.trim(); //trim()removes white spaces
    //console.log(inputText);
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    // clear inpute field
    inputRef.current.value = "";
  };

  //   delete text
  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id); //return every other todo except the one deleted
    });
  };

  //   complete tasks or not
  const toggle = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  //   edit todo
  const editTodo = (id) => {
    setTodoList(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  useEffect(() => {
    //save to local storage of the web by first converting it to json data and save it with the name "todos"
    localStorage.setItem("todos", JSON.stringify(todoList));
    //console.log(todoList);
  }, [todoList]);
  return (
    <div className="bg-white place-self-center max-w-sm flex flex-col py-6 px-2 md:px-3 min-h[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <CiBoxList className=" text-3xl text-amber-950" />

        <h1 className="text-2xl text-amber-900 font-semibold">To-Do List</h1>
      </div>
      {/* input box */}
      <div className="flex items-center my-8 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="w-full bg-transparent border-0 outline-none flex-1 py-2 md:py-3 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-amber-800 p-2 md:p-3 text-white text-sm font-medium"
        >
          ADD +
        </button>
      </div>

      {/* to do list */}
      <div>
        {todoList.map((item, index) => {
          return (
            <div>
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
