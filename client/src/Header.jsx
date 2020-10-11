import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const style={
fontWeight:'bold',
fontSize:'15px'
};
function Header(){
    
  return (
  
  
  <div className="navbar">


        {/* <BreadcrumbCustom /> */}
        <ul className="header">
        <Link to='/'>
        <li className="n1 first"
           style={style} >
                      {/* <Link to="/CheckType">New Requester Task</Link> */}
                       <p>New Requester Task</p>
        </li>
        </Link>
        <Link to='/worker'>
        <li className="n2">
          <p>Worker Task</p>
          {/* <Link to="/Worker">Worker Task</Link> */}
        </li>
        </Link>
       </ul>
    <br></br>

   
    </div>
   
  )
  }
export default Header