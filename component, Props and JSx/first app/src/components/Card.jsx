import React from 'react'
import "./card.css"
// rfce

function Card(props) {
  return (
    <div>
      <div className="card" style={{overflow: "hidden"}}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
