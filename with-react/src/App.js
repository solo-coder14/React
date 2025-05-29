import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/footer';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="I am Woafi"/>
      <div className='value' >{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>CLick me</button>
      <Footer/>
    </div>
  );
}

export default App;
