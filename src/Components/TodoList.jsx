import React, { useState } from "react";

export default function TodoList({
  allTodos,
  setAllTodos,
  dark,
  filter,
  setFilter,
}) {
  const handleCheck = (id, event) => {
    setAllTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: event.target.checked,
            }
          : item
      ),
    ]);
  };

  const handleDelete = (id) => {
    setAllTodos(() => allTodos.filter((todo) => todo.id !== id));
  };

  const counter = allTodos.length;

  console.log(filter);

  return (
    <div className="md:flex justify-center">
      <div className="md:w-[60%] lg:w-[40%]">
        <div
          className={`rounded-[5px] overflow-hidden ${
            dark ? "bg-[#25273d]" : "bg-white shadow-down-shadow"
          }`}
        >
          <ul>
            {allTodos
              .filter((todo) =>
                filter === "all"
                  ? true
                  : todo.isDone === (filter === "completed")
              )
              .map((todo) => (
                <li
                  key={todo.id}
                  className={`group flex justify-between items-center py-[1.4rem] px-[2rem] border-b-[1px] 
                    border-b-solid ${
                      dark ? "border-b-[#393a4b]" : "border-b-[#e3e4f1]"
                    } lg:py-[1.8rem] lg:px-[1.8rem] 2xl:px-[2.7rem]`}
                >
                  <div className="flex items-center gap-[1.2rem] text-[1.2rem] lg:text-[1.8rem]">
                    <input
                      id={todo.id}
                      checked={todo.isDone}
                      className={`custom-checkbox ${
                        dark
                          ? "bg[#25273d] border-[#393a4b]"
                          : "bg-white border-[#e3e4f1]"
                      }`}
                      type="checkbox"
                      onChange={(event) => handleCheck(todo.id, event)}
                    />
                    <label
                      htmlFor={todo.id}
                      className={`${
                        dark
                          ? todo.isDone
                            ? "line-through text-[#4d5067]"
                            : "text-[#c8cbe7]"
                          : todo.isDone
                          ? "line-through text-[#d1d2da]"
                          : "text-[#494c6b]"
                      } cursor-pointer`}
                    >
                      {todo.text}
                    </label>
                  </div>
                  <img
                    src="/images/icon-cross.svg"
                    alt="cross icon"
                    className="w-[1.2rem] h-[1.2rem] cursor-pointer lg:hidden group-hover:block
                  lg:w-[1.8rem] lg:h-[1.8rem]"
                    onClick={() => handleDelete(todo.id)}
                  />
                </li>
              ))}
            <div
              className={`mt-[1.6rem] flex mb-[1.8rem] justify-between text-[1.2rem] px-[2rem] ${
                dark ? "text-[#5b5e7e]" : "text-[#9495a5]"
              } lg:text-[1.4rem]`}
            >
              <p>{counter} items left</p>
              <div className="flex gap-[1.9rem] font-bold hidden sm:flex">
                <p
                  onClick={() => setFilter("all")}
                  className={`cursor-pointer ${
                    filter === "all" ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  All
                </p>
                <p
                  onClick={() => setFilter("active")}
                  className={`cursor-pointer ${
                    filter === "active" ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  Active
                </p>
                <p
                  onClick={() => setFilter("completed")}
                  className={`cursor-pointer ${
                    filter === "completed" ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  Completed
                </p>
              </div>
              <p
                onClick={() =>
                  setAllTodos((prevTodos) =>
                    prevTodos.filter((todo) => !todo.isDone)
                  )
                }
                className={`cursor-pointer ${
                  dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"
                }`}
              >
                Clear Completed
              </p>
            </div>
          </ul>
        </div>
        <div
          className={`flex justify-center mt-[1.6rem] gap-[1.8rem] text-[1.4rem] text-[#9495a5] 
              py-[1.5rem] rounded-[5px] sm:hidden ${
                dark ? "bg-[#25273d]" : "bg-white shadow-down-shadow"
              }`}
        >
          <p
            onClick={() => setFilter("all")}
            className={filter === "all" ? "text-[#3a7cfd]" : null}
          >
            All
          </p>
          <p
            onClick={() => setFilter("active")}
            className={filter === "active" ? "text-[#3a7cfd]" : null}
          >
            Active
          </p>
          <p
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "text-[#3a7cfd]" : null}
          >
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}
