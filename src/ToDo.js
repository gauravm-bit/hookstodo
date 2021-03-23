import React from "react";
import "./ToDo.css";

const ToDo = (props) => {
  return (
    <div className="list">
      {props.list.map((item) => (
        <div>         
        <li        
          style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
          onClick={() => props.toggleState(item.id)}
          key={item.id}
        >
          {item.isCompleted ?<input type="checkbox" checked /> : <input type="checkbox" />  }
           
          {" "}
          {item.text}
          
        </li>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
