import React from 'react'

function Child1({handleChange,textvalue}) {

  return (
    <div>
      <h3>Child1</h3>
      <input type="text" name="text" value={textvalue}onChange={handleChange}/> 
    </div>
  )
}

export default Child1;