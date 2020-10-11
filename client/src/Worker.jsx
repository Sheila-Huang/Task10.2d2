import React,{useState,useEffect} from 'react'
import './Header.css'
import TaskList from './TaskList';
import Details from './TaskDetails'
//import TaskForm from './TaskForm'
//import {Link} from 'react-router-dom'
import './TaskList.css'
import TaskDetails from './TaskDetails';
import TaskFilter from './TaskFilter'
//import { text } from 'body-parser';
const style={

fontSize:'12px',
textAlign:'center'
};


const Worker=()=>{
//   const deletHandler=(e)=>{

//     const {id}=e.target.parentElement
//     items.splice(id,1)
//     setItems([...items])
// // const newList=items.filter((item)=>item.id!==id)
// // setItems(newList)
// // let value = e.target.value;
// // setItems(items.filter((e)=>(e!==value)))

//      }
     


//      const showHandler=(e)=>{

//      setDetails(details)
//        }



  // useEffect(()=>{
  //   fetchItems();
  // },[]);
  // useEffect(()=>{
  //   fetchDetails();
  // },[]);
  // //const [items,setItems]=useState([]);
  // const [details,setDetails]=useState([])
// const fetchItems=async ()=>{
// const data=await fetch('http://localhost:3000/work')

// const items=await data.json();
// console.log(items);
// setItems(items)
// }
// const fetchDetails=async ()=>{
//   const data=await fetch('http://localhost:3000/detail')
  
//   const details=await data.json();
//   console.log(details);
//   setDetails(details)
//   }


  // const filterWork = list => {
  //     return list.filter(item => {
  //       return (
  //         item.taskTitle.toLowerCase().includes(searchTerm.taskTitle.toLowerCase()) &&
  //         item.taskDate
  //           .toLowerCase()
  //           .includes(searchTerm.taskDate.toLowerCase()) 
  //       );
  //     });
  //   };
  //   const filteredWork=filterWork(details)

// const [searchTerm,setSearchTerm]=useState(
//   {
//   taskTitle:'',
  
//   taskDate:''
// }
// // ""
// )
// //const[searchTerm,setSearchTerm]=useState('')
// const onSearchChange=(e)=>{

// setSearchTerm(e.target.value)
// //filteredWork(e.target.value)
// // const { name, value } = e.target;
// //     setSearchTerm({ [name]: value });
// // }
// // const filteredWork=details.filter((detail)=>{
// // return detail.taskTitle.toLowerCase().includes(searchTerm.taskTitle.toLowerCase())

// }
// )

  return (
  //   <h1 className='header-div'>{props.text}</h1>
  // )
  
  <div className="taskrequire">
        <ul className="header">
        <li 
           style={style} >
             <p>Worker's Task todo list</p>
        </li>
      
</ul>

    <br></br>
    <TaskList />
    {/* {filteredWork.map(item=>( */}
{/* <TaskList
// key={item._id}
// taskTitle={item.taskTitle}
// taskDescri={item.taskDescri}
// taskDate={item.taskDate}
// //setItems={setItems}
// //item={item}
// //items={items}
// deletHandler={deletHandler}
// showHandler={showHandler}
taskTitle={searchTerm.taskTitle}
taskDate={searchTerm.taskDate}
//searchWork={searchTerm}
/> */}
   {/* ))}  */}
   {/* {details.map(detail=>(
     <Details
key={detail._id}
setDetails={details}
/>
   ))} */}


</div>)
}

  
export default Worker