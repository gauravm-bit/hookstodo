import React, { useState } from "react";
import shortid from "shortid";
import ToDo from "./ToDo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({ text: "" });
  const [list, setList] = useState([]);
  const [listView, setListView] = useState("all")
  
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
 
  let currentList = [...list]
  if(listView === "all") {
    currentList = [...list]
  }
  else if (listView === "active"){
    currentList = currentList.filter(item => item.isCompleted === false)
  }
  else if(listView === "completed"){
    currentList = currentList.filter(item => item.isCompleted === true)
  }

  const toggleAll = () => {
    setListView("all")
  }

  const toggleActive = () => {
    setListView("active")
  }

  const toggleCompleted = () => {
    setListView("completed")
  }

  const deleteCompleted = () => {
    let updatedList = list.filter(item => item.isCompleted === false)
    setList([...updatedList])
  }

  const deleteItem = (id) => {
    let newlist = list.filter(item => item.id !== id)
    setList(
      [...newlist])
  }

  return (
    <div className="app">
      <header id="header">TO-DO LIST</header>
      <p> Number of active todos :{" "}{list.filter(item => item.isCompleted === false).length}  </p>
      <div className="buttonGrp">
      <button onClick = {toggleAll}> ALL </button>
      <button onClick = {toggleActive}> ACTIVE </button>
      <button onClick = {toggleCompleted}> COMPLETED </button>
      </div>    
      <button onClick = {deleteCompleted}> Delete Completed</button>  
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Here"
          onChange={handleChange}
          value={todo.text}
        ></input>
        <button onClick={handleSubmit}>+</button>
      </form>
      <div>
        <ToDo toggleState={toggleState} list={currentList} deleteItem ={ deleteItem}/>
      </div>
    </div>
  );
}

export default App;
