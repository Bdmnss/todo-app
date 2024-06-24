import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
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

  const counter = todos.map((todo) => todo).length;

  return (
    <>
      <main
        className="min-h-screen min-w-screen bg-dark-bg-img-mobile bg-contain bg-no-repeat 
      bg-[#171823]"
      >
        <div className="mx-auto  px-[2.4rem] pt-[4.8rem] pb-[12.6rem]">
          <div className="flex justify-between items-center mb-[2rem]">
            <h1 className="text-[3rem] tracking-[1.2rem] text-white font-bold">
              TODO
            </h1>
            <img src="/images/icon-sun.svg" alt="sun icon" />
          </div>
          <div className="relative mb-[1.6rem]">
            <button
              onClick={handleAdd}
              className="absolute w-[2rem] h-[2rem] bg-[#25273d] top-[29%] left-[4%] rounded-[50%] 
              border-[1px] border-solid border-[#393a4b] "
            ></button>
            <input
              className="w-[100%] py-[1.4rem] pr-[10rem] pl-[4rem] bg-[#25273d] 
              placeholder-[#767992] text-white outline-none rounded-[5px] text-[1.2rem]"
              type="text"
              placeholder="Create a new todo..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleEnter}
            />
          </div>

          <div className="rounded-[5px] overflow-hidden bg-[#25273d] ">
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center py-[1.4rem] pr-[3rem] 
                  pl-[2rem] bg-[#25273d] border-b-[1px] border-b-solid border-b-[#393a4b]"
                >
                  <div className="flex items-center gap-[1.2rem] text-[1.2rem] text-[#c8cbe7]">
                    <input
                      type="checkbox"
                      onChange={(event) => handleCheck(event, todo.id)}
                    />
                    {todo.text}
                  </div>
                  <img
                    src="/images/icon-cross.svg"
                    alt="cross icon"
                    className="w-[1.2rem] h-[1.2rem]"
                    onClick={() => handleDelete(todo.id)}
                  />
                </li>
              ))}
              <div className="mt-[1.6rem] flex mb-[20px] justify-evenly text-[1rem] text-[#5b5e7e]">
                <p>{counter} items left</p>
                <div className="flex gap-[1.9rem]">
                  <p>All</p>
                  <p>Active</p>
                  <p>Completed</p>
                </div>
                <p>Clear Completed</p>
              </div>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
