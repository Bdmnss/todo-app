import React from "react";
import { useState } from "react";

export default function TodoList({ todos, setTodos, setAllTodos, dark }) {
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
    setAllTodos(() =>
      allTodos.filter((todo) => {
        return todo.id !== id;
      })
    );

    setTodos(() =>
      allTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleAll = () => {
    setCompleted(false);
    setAllActive(true);
    setActive(false);
    setTodos(() => {
      return allTodos;
    });
  };

  const handleActive = () => {
    setCompleted(false);
    setAllActive(false);
    setActive(true);
    setTodos(() =>
      allTodos.filter((todo) => {
        return todo.isDone === false;
      })
    );
  };

  const handleCompleted = () => {
    setCompleted(true);
    setAllActive(false);
    setActive(false);
    setTodos(() =>
      allTodos.filter((todo) => {
        return todo.isDone === true;
      })
    );
  };

  const handleClearCompleted = () => {
    setAllTodos(() =>
      allTodos.filter((todo) => {
        return todo.isDone !== true;
      })
    );

    setTodos(() =>
      allTodos.filter((todo) => {
        return todo.isDone !== true;
      })
    );
  };

  const counter = todos.map((todo) => todo).length;

  return (
    <div>
      <div
        className={`rounded-[5px] overflow-hidden ${
          dark ? "bg-[#25273d]" : "bg-white shadow-down-shadow"
        }`}
      >
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center py-[1.4rem] pr-[2rem] 
                  pl-[2rem] border-b-[1px] border-b-solid ${
                    dark ? "border-b-[#393a4b]" : "border-b-[#e3e4f1]"
                  }`}
            >
              <div className="flex items-center gap-[1.2rem] text-[1.2rem]">
                <input
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
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <img
                src="/images/icon-cross.svg"
                alt="cross icon"
                className="w-[1.2rem] h-[1.2rem]"
                onClick={() => handleDelete(todo.id)}
              />
            </li>
          ))}
          <div
            className={`mt-[1.6rem] flex mb-[1.8rem] justify-between text-[1.2rem] px-[2rem] ${
              dark ? "text-[#5b5e7e]" : "text-[#9495a5]"
            } `}
          >
            <p>{counter} items left</p>
            <div className="flex gap-[1.9rem] font-bold hidden">
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
            <p onClick={handleClearCompleted}>Clear Completed</p>
          </div>
        </ul>
      </div>
      <div
        className={`flex justify-center mt-[1.6rem] gap-[1.8rem] text-[1.4rem] text-[#9495a5] 
              py-[1.5rem] rounded-[5px] ${
                dark ? "bg-[#25273d]" : "bg-white shadow-down-shadow"
              }`}
      >
        <p onClick={handleAll} className={allActive ? "text-[#3a7cfd]" : null}>
          All
        </p>
        <p onClick={handleActive} className={active ? "text-[#3a7cfd]" : null}>
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
  );
}
