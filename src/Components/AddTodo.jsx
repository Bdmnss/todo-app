import React from "react";
import { useState } from "react";

export default function AddTodo({ setTodos, setAllTodos, dark }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: inputValue,
        isDone: false,
        id: Math.random(),
      },
    ]);
    setAllTodos((prevTodos) => [
      ...prevTodos,
      {
        text: inputValue,
        isDone: false,
        id: Math.random(),
      },
    ]);
    setInputValue("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="relative mb-[1.6rem] flex md:justify-center">
      <button
        onClick={handleAdd}
        className={`absolute w-[2rem] h-[2rem] ${
          dark ? "bg-[#25273d] border-[#393a4b]" : "bg-white border-[#e3e4f1]"
        } top-[29%] left-[6%] rounded-[50%] border-[1px] border-solid sm:left-[3%] md:left-[22%]
        lg:left-[31.5%] lg:w-[2.4rem] lg:h-[2.4rem]`}
      ></button>
      <input
        className={`w-[100%] py-[1.4rem] pr-[10rem] pl-[5rem] outline-none rounded-[5px] text-[1.2rem]
           ${
             dark
               ? "bg-[#25273d] placeholder-[#767992] text-[#c8cbe7]"
               : "bg-white placeholder-[#9495a5] text-[#393a4b]"
           } 
         md:w-[60%] lg:w-[40%] lg:py-[1.8rem] lg:pl-[6.5rem] lg:text-[1.8rem]`}
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleEnter}
      />
    </div>
  );
}
