import React, { useState } from "react";
import shortid from "shortid";
import ToDo from "./ToDo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({ text: "" });
  const [list, setList] = useState([]);
  
  const handleChange = (event) => {
    setTodo((todo) => ({
      ...todo,
      text: event.target.value,
      id: shortid.generate(),
      isCompleted: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text.trim().length > 0) {
      setList((list) => [...list, todo]);
    }

    //Resetting the  input to blank again after the todo is added
    setTodo({
      text: "",
    });
  };

  const toggleState = (id) => {
    let newlist = [...list];
    for (let i = 0; i < newlist.length; i++) {
      if (newlist[i].id === id) {
        newlist[i].isCompleted = !newlist[i].isCompleted;
      }
    }
    setList(
      [...newlist])
  }

  return (
    <div className="app">
      <header id="header">TO-DO LIST</header>
      <p> Number of active todos :{" "}{list.filter(item => item.isCompleted === false).length}  </p>
      <div>
      <button> ALL </button>
      <button> ACTIVE </button>
      <button> COMPLETED </button>
      </div>      
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Here"
          onChange={handleChange}
          value={todo.text}
        ></input>
        <button onClick={handleSubmit}>+</button>
      </form>
      <div>
        <ToDo toggleState={toggleState} list={list} />
      </div>
    </div>
  );
}

export default App;
