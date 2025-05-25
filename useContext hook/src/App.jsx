import { useState } from 'react';
import { counterContext, objectContext } from './context/context';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(10);
  const [object, setObject] = useState({ name: "woafi" });

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <objectContext.Provider value={{ object, setObject }}>
        <Navbar />
      </objectContext.Provider>
    </counterContext.Provider>
  );
}

export default App;