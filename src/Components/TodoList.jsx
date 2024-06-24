import React, { useState } from "react";

export default function TodoList({
  todos,
  setTodos,
  allTodos,
  setAllTodos,
  dark,
}) {
  const [allActive, setAllActive] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleCheck = (id, event) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: event.target.checked,
            }
          : item
      ),
    ]);
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
    setTodos(() => allTodos.filter((todo) => todo.id !== id));
  };

  const handleAll = () => {
    setCompleted(false);
    setAllActive(true);
    setActive(false);
    setTodos(() => allTodos);
  };

  const handleActive = () => {
    setCompleted(false);
    setAllActive(false);
    setActive(true);
    setTodos(() => allTodos.filter((todo) => !todo.isDone));
  };

  const handleCompleted = () => {
    setCompleted(true);
    setAllActive(false);
    setActive(false);
    setTodos(() => allTodos.filter((todo) => todo.isDone));
  };

  const handleClearCompleted = () => {
    setAllTodos(() => allTodos.filter((todo) => !todo.isDone));
    setTodos(() => allTodos.filter((todo) => !todo.isDone));
  };

  const counter = todos.length;

  return (
    <div className="md:flex justify-center">
      <div className="md:w-[60%] lg:w-[40%]">
        <div
          className={`rounded-[5px] overflow-hidden ${
            dark ? "bg-[#25273d]" : "bg-white shadow-down-shadow"
          }`}
        >
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`group flex justify-between items-center py-[1.4rem] px-[2rem] border-b-[1px] 
                    border-b-solid ${
                      dark ? "border-b-[#393a4b]" : "border-b-[#e3e4f1]"
                    } lg:py-[1.8rem] lg:px-[3.5rem]`}
              >
                <div className="flex items-center gap-[1.2rem] text-[1.2rem] lg:text-[1.8rem]">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    onChange={(event) => handleCheck(todo.id, event)}
                  />
                  <span
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
                  </span>
                </div>
                <img
                  src="/images/icon-cross.svg"
                  alt="cross icon"
                  className="w-[1.2rem] h-[1.2rem] cursor-pointer md:hidden group-hover:block
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
                  onClick={handleAll}
                  className={`cursor-pointer ${
                    allActive ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  All
                </p>
                <p
                  onClick={handleActive}
                  className={`cursor-pointer ${
                    active ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  Active
                </p>
                <p
                  onClick={handleCompleted}
                  className={`cursor-pointer ${
                    completed ? "text-[#3a7cfd]" : null
                  } ${dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"}`}
                >
                  Completed
                </p>
              </div>
              <p
                onClick={handleClearCompleted}
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
            onClick={handleAll}
            className={allActive ? "text-[#3a7cfd]" : null}
          >
            All
          </p>
          <p
            onClick={handleActive}
            className={active ? "text-[#3a7cfd]" : null}
          >
            Active
          </p>
          <p
            onClick={handleCompleted}
            className={completed ? "text-[#3a7cfd]" : null}
          >
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}
