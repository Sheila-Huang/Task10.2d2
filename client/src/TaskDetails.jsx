import React from 'react'
import './TaskList.css'
//import TaskTodo from'./TaskTodo'

const TaskDetails = (props)=>{

    return <div className="detial-dispay" >
    
    <h3>{props.taskTitle}</h3>
    <p>{props.taskDescri}</p>
    <p>{props.taskDate}</p>
    <p>{props.reward}</p>
    <p>{props.number}</p>
    </div>
    
  }

export default TaskDetails