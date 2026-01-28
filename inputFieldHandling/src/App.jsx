import { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// import { useState } from "react";

// function App() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//     console.log("Checkbox is:", event.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         I agree to the terms and conditions
//       </label>

//       <p>Checkbox is {isChecked ? "Checked ✅" : "Unchecked ❌"}</p>
//     </div>
//   );
// }

// export default App;
