import { useState } from 'react'
import State from './components/State'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true) //for showing button
  const [todos, setTodos] = useState([
    {
      title: "Chicken",
      desc: "2kg, 400tk"
    }, {
      title: "Potato",
      desc: "1kg, 60tk"
    }
  ])


  // const Todo = (todo) => {
  //   return (<>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </>)
  // }
  const Todo = ({ todo }) => {
    return (<>
      <div className="m-4 border-amber-600 border-1">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
    </>)
  }

  return (
    <>
      <div>

      </div>
      {/* {todos.map(item => {
        return < Todo
          title={item.title}  //title of usestates
          desc={item.desc} />
      })} */}
      {todos.map(item => {
        return <Todo key={item.title} todo={item} />
      })}
      <div>
        {showbtn ? <button>I will show this button1</button> : "Not available"}
      </div>
      {showbtn && <button>I will show this button2</button>}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle ShowButton
        </button>

      </div>
      <State />

    </>
  )
}

export default App
