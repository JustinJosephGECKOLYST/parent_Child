import React from 'react'

function Child2(props) {
  return (
    <div>
        <h3>Child2</h3>
      <input type="text" name="text" value={props.name}/>
    </div>
  )
}

export default Child2;