import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  const btnRef = useRef()

  useEffect(() => {
    console.log(`Rendering is ${a.current}`)
    // a.current = a.current + 1;
  })
  useEffect(() => {
    // console.log(`Rendering is....`) 
    // btnRef.current.style.backgroundColor = "red";
  },[])

  function increment(){
    setCount(count + 1)
    a.current = a.current + 1;
    // console.log(a.current)
  }
  

  return (
    <>
      
      <div className="card">
        <button  onClick={increment}>
          count is {count} {a.current}
        </button>
      </div>
      <button ref = {btnRef} onClick={ ()=> { btnRef.current.style.display = "none"}} >Change me</button>

      <Card />
    </>
  )
}

export default App
