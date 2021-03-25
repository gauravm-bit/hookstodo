import React from "react";
import "./ToDo.css";

const ToDo = (props) => {
  return (
    <div className="list">
      {props.list.map((item) => (
        <div key={item.id}>
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
        </div>
      ))}
    </div>
  );
};

export default ToDo;
