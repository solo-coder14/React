// import { useState } from 'react'

// function App() {
//   const [obj, setObj] = useState({
//     name: "",
//     list: [
      
//     ]
//   });
  
//   const [value, setValue] = useState({ username: "", password: "" });

//   function handleAdd() {
//     setObj(prevObj => ({
//       ...prevObj,
//       list: [...prevObj.list, value]
//     }));    
//     // Clear the input fields after adding
//     setValue({ username: "", password: "" });
//   }

//   const handleChange = (e) => {
//     setValue(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   }

//   return (
//     <div>
//       <div>
//         <input 
//           value={value.username} 
//           name="username" 
//           onChange={handleChange}  
//           type="text" 
//         />
//         <input 
//           value={value.password} 
//           name="password" 
//           onChange={handleChange}  
//           type="text" 
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>
      
//       {/* Display the current state for debugging */}
//       <pre>{JSON.stringify(obj, null, 2)}</pre>
//     </div>
//   )
// }

// export default App



import { useState } from 'react'
import Watch from './components/Watch';

function App() {
  const [obj, setObj] = useState({
    name: "",
    list: []
  });
  
  const [value, setValue] = useState({ username: "", password: "" });
  const [indexCounter, setIndexCounter] = useState(1); // New state for counter

  function handleAdd() {
    setObj(prevObj => ({
      ...prevObj,
      list: [...prevObj.list, { ...value, index: indexCounter }] // Include current index
    }));
    
    // Clear the input fields and increment counter
    setValue({ username: "", password: "" });
    setIndexCounter(prev => prev + 1);
  }

  const handleChange = (e) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
      <div>
        <input 
          value={value.username} 
          name="username" 
          onChange={handleChange}  
          type="text" 
        />
        <input 
          value={value.password} 
          name="password" 
          onChange={handleChange}  
          type="text" 
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      
      {/* Display the current state for debugging */}
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      
    </div>
  )
}

export default App