import React from 'react'


const TaskFilter=({searchTerm,onSearchChange})=>{
    const style = {
        listStyle: 'none'
       
      };
return(<div>
    
    <ul style={style}>
< li >
<input 
style={{height:"60%"}}
type="text"
name="taskTitle"

placeholder="Search for Task Title"
onChange={e=>onSearchChange(e)}
value={searchTerm.taskTitle}
className="filter-input"
/>
</li>
< li>
<input 
style={{height:"60%"}}
name="taskDate"
type="text"
placeholder="Search for Task Date"
onChange={e=>onSearchChange(e)}
value={searchTerm.taskDate}
className="filter-input"
/></li>
</ul>
</div>

)}
export default TaskFilter;