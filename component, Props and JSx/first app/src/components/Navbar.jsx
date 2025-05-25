import React from 'react'
import "./Navbar.css"
const Navber = (props) => {
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div>{props.name}</div>
      </nav>
    </div>
  )
}

export default Navber
