import React from 'react'

const SelecTask=(props)=>{
    return <div>

<input type={props.type} 
name={props.name} 
onChange={props.onChange} 
value={props.value}
checked={props.checked}

//defaultChecked={props.State.checked}
/>
</div>
}

export default SelecTask

