import React,{useState} from 'react';
import shortid from 'shortid';
import './App.css';

function App() {

  const[todo, setTodo] = useState({text : ""}) 
  const[list,setList] = useState([])

  const handleChange = (event) => {
      setTodo({
        todo : {text : event.target.value}
      })
  }
 console.log(todo);
  
 const handleSubmit = (event) => {
   event.preventDefault()
     setList({
       list : [...list,todo]
     })
  }
  console.log(list);

  return (
    <div className = "app">
     <header id ="header">
       TO-DO LIST 
     </header>
     <form onSubmit={handleSubmit}>
       <input placeholder="Enter Here"
              onChange = {handleChange}
       ></input>
       <button onClick={handleSubmit}  >+</button>
     </form>
    </div>
  );
}

export default App;
