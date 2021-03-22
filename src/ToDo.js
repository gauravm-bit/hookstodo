import React from "react";
import "./ToDo.css";

const ToDo = (props) => {
  return (
    <div className="list">
      {props.list.map((item) => (
        <li
          style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
          onClick={() => props.toggleState(item.id)}
          key={item.id}
        >
          {item.text}
        </li>
      ))}
    </div>
  );
};

export default ToDo;
