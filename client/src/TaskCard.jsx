import React,{useRef,useState} from 'react'
import './TaskCard.css'
import Chevron from './Chevron'

const TaskCard = (props) =>
{
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");
   const content = useRef(null)
   
  // useEffect(() => {
  //   contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  // }, [contentRef, active])

  const showHandeler = () => {
  


    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );

  }
  

//     return <div className="w3-card-4 w3-dark-grey" >
    
//  <div className='column'>
//  <div className="w3-container w3-center">
    
    return  <div id={props.key}className="accordion-section">
         <button   onClick={showHandeler} className={`accordion ${setActive}`}>
        <div className="accordion-title">
        
         <h3>{props.taskTitle}</h3>
         <p>{props.id}</p>
     <p >{props.taskDescri}</p>
     <p>{props.taskDate}</p>
    
     </div>
         <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
         </button>
         {/* <button id={props.key} onClick={props.deletHandler} class="w3-button w3-red">Decline</button> */}
       
<div 
ref={content}
style={{ maxHeight: `${setHeight}` }}
className="accordion-content"
>
<div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: "The task you choose is to: "+props.content0 }}
        />
<div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: "Reward for each response: "+props.content1 }}
        />
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: "Numbers of worker needed: "+props.content2 }}
        />
       
</div>


</div>
      
    //  </div>
        
    //  </div>
  }
     export default TaskCard