import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [dark, setDark] = useState(true);

  const handleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <>
      <main
        className={`min-h-screen min-w-screen ${
          dark
            ? "bg-dark-bg-img-mobile bg-[#171823]"
            : "bg-light-bg-img-mobile bg-[#fafafa]"
        } bg-contain bg-no-repeat`}
      >
        <div className="mx-auto  px-[2.4rem] pt-[4.8rem] pb-[12.6rem]">
          <div className="flex justify-between items-center mb-[2rem]">
            <h1 className="text-[3rem] tracking-[1.2rem] text-white font-bold">
              TODO
            </h1>
            <img
              src={dark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
              alt={dark ? "sun icon" : "moon icon"}
              onClick={handleDarkMode}
            />
          </div>

          <AddTodo setTodos={setTodos} setAllTodos={setAllTodos} dark={dark} />

          <TodoList
            todos={todos}
            setTodos={setTodos}
            setAllTodos={setAllTodos}
            dark={dark}
          />
        </div>
      </main>
    </>
  );
}

export default App;
