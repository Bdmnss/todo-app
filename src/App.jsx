import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [allActive, setAllActive] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [dark, setDark] = useState(true);

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

  const handleDarkMode = () => {
    setDark(!dark);
  };

  const counter = todos.map((todo) => todo).length;

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
          <div className="relative mb-[1.6rem]">
            <button
              onClick={handleAdd}
              className={`absolute w-[2rem] h-[2rem] ${
                dark
                  ? "bg-[#25273d] border-[#393a4b]"
                  : "bg-white border-[#e3e4f1]"
              } top-[29%] left-[6%] rounded-[50%] 
              border-[1px] border-solid`}
            ></button>
            <input
              className={`w-[100%] py-[1.4rem] pr-[10rem] pl-[5rem] ${
                dark
                  ? "bg-[#25273d] placeholder-[#767992] text-[#c8cbe7]"
                  : "bg-white placeholder-[#9495a5] text-[#393a4b]"
              } 
               text-white outline-none rounded-[5px] text-[1.2rem]`}
              type="text"
              placeholder="Create a new todo..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleEnter}
            />
          </div>

          <div
            className={`rounded-[5px] overflow-hidden ${
              dark ? "bg-[#25273d]" : "bg-white"
            }`}
          >
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`flex justify-between items-center py-[1.4rem] pr-[3rem] 
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
                className={`mt-[1.6rem] flex mb-[20px] justify-evenly text-[1rem] ${
                  dark ? "text-[#5b5e7e]" : "text-[#9495a5]"
                } `}
              >
                <p>{counter} items left</p>
                <div className="flex gap-[1.9rem] font-bold">
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
        </div>
      </main>
    </>
  );
}

export default App;
