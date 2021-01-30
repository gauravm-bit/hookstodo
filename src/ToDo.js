import React from 'react'
import './ToDo.css'
const ToDo = props => {
    return(
        <div className= "list"  >
            {props.list.map((item) => <li key={item.id}>{item.text}</li>)}
        </div>
    )
}

export default ToDo;