import React from 'react'
import CheckType from './CheckType'
import Header from'./Header'
//  import Description from './TaskDescri'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Worker from './Worker'

function App()
{

    return (
      <Router>
      <div>
     <Header />
     <Switch> 
<Route path='/' exact component={CheckType} /> 
<Route path='/worker' component={Worker} /> 
</Switch>  
    
     {/* <CheckType /> */}
    
      </div>
      </Router>
    );

    
}
export default App