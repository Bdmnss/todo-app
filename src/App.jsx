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

  const counter = todos.map((todo) => todo).length;

  return (
    <>
      <main>
        <div>
          <h1>TODO</h1>
          <img src="/images/icon-sun.svg" alt="sun icon" />
        </div>
        <div>
          <button onClick={handleAdd}></button>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleEnter}
          />
        </div>

        <div>
          <ul>
            {todos.map((todo) => (
              <li>
                <input
                  type="checkbox"
                  onChange={(event) => handleCheck(event, item.id)}
                />
                {todo.text}
                <img src="/images/icon-cross.svg" alt="cross icon" />
              </li>
            ))}
            <div>
              <p>{counter} items left</p>
              <div>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>
              <p>Clear Completed</p>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
