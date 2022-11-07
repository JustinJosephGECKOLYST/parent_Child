import Child1 from './Child1'
import Child2 from './Child2'
import {useState} from 'react'


function Parent2() {
  const[textvalue,setValue]=useState("")
  function handleChange(event){
    setValue(event.target.value)
  }
  return (
    <div>

      <h3>parent</h3>
        <input type="text" name="text" value={textvalue} />
        <Child1 handleChange={handleChange}textvalue={textvalue}/>
        <Child2 name={textvalue}/>
    </div>
  )
}

export default Parent2