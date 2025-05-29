import React from 'react'
import { useState, useEffect, useRef } from 'react'


function Card() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);
  
    useEffect(() => {
      console.log(count);
      prevCountRef.current = count; // Update ref after render
    }, [count]);
  
    const prevCount = prevCountRef.current;
  
    return (
      <div>
        <p>Current: {count}, Previous: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

export default Card
