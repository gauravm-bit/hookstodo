import React from "react";
import "./ToDo.css";

const ToDo = (props) => {
  return (
    <div className="list">
      {props.list.map((item) => (
        <div key={item.id} className="list-content">
          <li
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
            onClick={() => props.toggleState(item.id)}
          >
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => !item.isCompleted}
            />{" "}
            {item.text}
          </li>
          
          <div className="tooltip">
            {"   "}
          <button   onClick={() => props.deleteItem(item.id)}>
            x
          </button>
            <span className="tooltiptext">delete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
