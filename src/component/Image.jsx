import React from 'react'
import bird from "./bird.jpg"

function Image(props) {
  return (
    <div className='leftprofile'>
        <img src={props.src}/>
    </div>
  )
}

export default Image