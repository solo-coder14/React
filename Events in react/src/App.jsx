import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [form, setForm] = useState({email:"", type:""})

  const handleClick = () =>{
    alert("I am clicked")
    console.log(name)
    console.log(form)
  }

  // const handleChange = (e) =>{
  //   setName(e.target.value)
  // }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form) 
  }


  return (
    <>
      <button onClick={handleClick}>Click me</button>



      {/* <input type="text" value={name} onChange={handleChange} /> */}

      {/* <p>{name}</p> */}
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} /> 
    </>
  )
}

export default App
