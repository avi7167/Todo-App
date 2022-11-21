import React, { useState } from "react";
import "./TaskShow.css";

export default function TaskShow() {
  
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);
  // const[dateInput, setdateInput] = useState([]);

  const btn1Click = ()=>{
   setTasklist([...tasklist, task]);

}

const btn2Click = (index)=>{
    tasklist.splice(index,1);
    setTasklist([...tasklist]);
}

const change = (event)=>{
 setTask(event.target.value);
}  

// const dateChangeHandler = (event)=>{
//   setdateInput(event.target.value);
//  }  

const btn3Click = ()=>{
 
} 
 
  return (
    <>
        <div className="whole">
        <div className="container1">
          <h2>Enter the task you want to add in list - </h2>
          <div className="mb-5">
            <input type="text" className="form-control mt-5" placeholder = "Enter your task here" value={task} onChange={change} id="myBox"/>
            </div>
            <div >
              {/* <input className="todo-user-input" value={dateInput} onChange={dateChangeHandler} type="date" id="deadLine"/> */}
            </div>
          <div className="btngroup">
            <button type="submit" className="btn btn-success mb-5" onClick={btn1Click}>Add Task</button>
          </div>
          </div>
          <div className="container2">
            {tasklist.length > 0  && <h1>Todo List </h1>}
              <div>
              {tasklist.map((item,index)=>
                  <div className="newcontainer1">
                    <div className="items">{item}</div>
                  <span>
                  <button className= "btncancel btn btn-primary" onClick= {()=>btn3Click(index)}> Edit Task</button>
                  <button className= "btncancel btn btn-danger" onClick= {()=>btn2Click(index)}> Remove Task</button>
                  </span>
                  </div>
              )}
              </div>
          </div>
          </div>
    </>
  );
}
