import React, {memo} from 'react'


const Navbar = ({value, change}) => {
    console.log("Navbar is render")
  return (
    <div>
      I am a {value} Navbar
      <button onClick={()=>{ change() }}>Change</button>
    </div>
  )
}

export default memo(Navbar)
