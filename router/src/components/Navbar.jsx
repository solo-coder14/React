// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navber = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navber


import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink className={(e)=>{return e.isActive? "red cap" : "" }} to="/">Home</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive? "red cap" : "" }} to="/about">About</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive? "red cap" : "" }} to="/user/woafi">User</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navber