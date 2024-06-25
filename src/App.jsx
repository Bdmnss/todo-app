import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("all");

  const handleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <>
      <main
        className={`min-h-screen min-w-screen ${
          dark
            ? "bg-dark-bg-img-mobile bg-[#171823] sm:bg-dark-bg-img-dekstop"
            : "bg-light-bg-img-mobile bg-[#fafafa] sm:bg-light-bg-img-dekstop"
        } bg-contain bg-no-repeat`}
      >
        <div className="mx-auto px-[2.4rem] pt-[4.8rem] pb-[12.6rem] lg:pt-[6rem]">
          <div
            className="flex justify-between items-center mb-[2rem] md:justify-center md:gap-[39%]
          lg:gap-[26%] lg:mb-[4rem] 2xl:gap-[29.5%]"
          >
            <h1 className="text-[3rem] tracking-[1.2rem] text-white font-bold lg:text-[4rem]">
              TODO
            </h1>
            <img
              className="cursor-pointer"
              src={dark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
              alt={dark ? "sun icon" : "moon icon"}
              onClick={handleDarkMode}
            />
          </div>

          <AddTodo allTodos={allTodos} setAllTodos={setAllTodos} dark={dark} />

          <TodoList
            filter={filter}
            setFilter={setFilter}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            dark={dark}
          />
        </div>
      </main>
    </>
  );
}

export default App;
