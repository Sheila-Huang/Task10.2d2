import React,{useEffect,useState,useRef,useReducer} from 'react'
import './TaskList.css'
import TaskCard from'./TaskCard'
import TaskFilter from './TaskFilter'
import TaskDetails from './TaskDetails'
import Worker from './Worker'

const TaskList = (props)=>{

   
    
    
           useEffect(()=>{
            fetchDetails();
          },[]);
          //const [items,setItems]=useState([]);
          const [details,setDetails]=useState([])

           const fetchDetails=async ()=>{
            const data=await fetch('http://localhost:3000/detail')
            
            const details=await data.json();
            console.log(details);
            setDetails(details)
            }
          
          
          
        //   const[search,setSearch]=useState('')
        //   const onSearchChange=(e)=>{
          
        //   setSearch(e.target.value)
          
        //   }
    // const [items,setItems]=useState([]);
    //     useEffect(()=>{
    //           fetchItems();
    //         },[]);
    // //const filteredStaff=
    // const fetchItems=async ()=>{
    //     const data=await fetch('http://localhost:3000/work')
        
    //     const items=await data.json();
    //     console.log(items);
    //     setItems(items)
    //     }
    
        const deletHandler=(index)=>{

    //         console.log(index)
            //var id=e.target.getAttribute("index")
            const temp=[...details]
          // const newList=details.filter((detail)=>detail.id!==id)
    


    temp.splice(index,1)
       
               setDetails(temp)
            // let name=e.target.value
            //  setDetails(details.filter((el)=>el!==name))
             //setItems(items.filter((e)=>(e!==value)))
        }
    //     const deletHandler=(e)=>{
    
           
    // const id=e.target
    
    // //getAttribute("_id")
    // details.splice(details.indexOf(id),1)
    //         setDetails(details)
    //         //setDetails(details.filter((el)=>el._id!==id))
    //     }
    // const filteredWork=details.filter((detail)=>{
    // var a=detail.taskTitle.toLowerCase().includes(props.searchWork.toLowerCase());
    // var b=detail.taskDate.toLowerCase().includes(props.searchWork.toLowerCase());
    
    // return a,b;
    // })
    const [searchTerm,setSearchTerm]=useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
        taskTitle:"",
        taskDate:""
    })
    //const[searchTerm,setSearchTerm]=useState('')
    const onSearchChange=(e)=>{
    
    const {value,name}=e.target
    
    setSearchTerm({[name]:value})
    //setSearchTerm(value)
    //filterWork(value)
    }
    const filterWork = list => {
        return list.filter(item => {
          return (
            item.taskTitle.toLowerCase().includes(searchTerm.taskTitle.toLowerCase()) &&
            item.taskDate
              .toLowerCase()
              .includes(searchTerm.taskDate.toLowerCase()) 
          );
        });
      };
      const filteredWork=filterWork(details)
    //const filteredWork=details.filter((detail)=>{

//     const mainItems=['taskTitle','taskDate']
// //const [filteredWork,setFilteredWork]=useState([])

//     const filterWork=(value)=>{
//     const lowerCaseValue=value.toLowerCase().trim();
//     if (lowerCaseValue === "") setDetails(details);
//     else{
//     const filteredWork=details.filter(detail=>{
//        return Object.keys(detail).some(key=>
//         mainItems.includes(key)? false
// :detail[key].toString().toLowerCase().includes(lowerCaseValue)  )
        
    
//         })
//         setDetails(filteredWork)
//     }
//     }

 return<div className="row">
     <div className="filter">
     <TaskFilter
     searchTerm={searchTerm}
onSearchChange={onSearchChange}
/>
</div>
  {/* < li>
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
/></li> */}

    {filteredWork.map((detail,index)=>(
        <div  key={index}>
<TaskCard 
//deletHandler={deletHandler(index)}
//showHandler={showHandler}
// content1={item.taskTitle}
// content2={item.taskDate}
// content3={item.taskDescri}
//id={detail._id}
key={index}
    taskTitle={detail.taskTitle}
    taskDescri={detail.taskDescri}
    taskDate={detail.taskDate}
    content0={detail.taskDescri}
    content1={detail.reward}
 content2={detail.number}
 //content3={detail.taskDescri}
//searchWork={searchTerm} 
/>
<button className="w3-button w3-red" type="button" onClick={() =>deletHandler(index)}>
            Remove
          </button>
</div>


    ))}
     
    {/* <span className="accordion-text">
{details.map((detail,i)=>(
<TaskDetails

    key={detail._id}
    taskTitle={detail.taskTitle}
    taskDescri={detail.taskDescri}
    taskDate={detail.taskDate}
    taskReward={detail.taskReward}
    taskNumber={detail.taskNumber} */}
    {/* //setItems={setItems}
    // item={item}
    // items={items}
    // deletHandler={deletHandler}
     //showHandler={showHandler}
    // content={details}
 /> 
))} 
{/* {details} */}
    {/* </span>
    </TaskCard>
    ))} */} 

</div>

//</div>

  }

export default TaskList


//<div className="search">
//      <input 
// style={{height:"60%"}}
// type="text"
// placeholder="Search for title"
// onChange={(e)=> onSearchChange(e)}
// value={searchTerm.taskTitle}

// />
// <input 
// style={{height:"60%"}}
// type="text"
// placeholder="Search for date"
// onChange={(e)=> onSearchChange(e)}
// value={searchTerm.taskDate}

// />
// <br></br>
// <br></br>