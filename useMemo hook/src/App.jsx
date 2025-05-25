import { useMemo, useState, memo } from 'react';
import Button from './Components/Button';

// Moved outside component to prevent recreation on every render
const initialArr = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
});

// Extracted ChildComponent outside to prevent recreation on every render
const ChildComponent = memo(
  function ChildComponent({ id, data }) {
    console.log("re-renader ChildComponent")
    return <div>{id}: {data}</div>;
  },
  (prevProps, nextProps) => {
    // Skip re-render if id hasn't changed
    return prevProps.id === nextProps.id;
  }
);

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(initialArr);

  const handleClick = () => {
    //count State update
    setCount((count) => count + 1);

    if (count === 10) {  // Changed == to === for strict equality
      setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
        return {
          index: i,
          isMagical: i === 9_000_000
        }
      }));
    }
  }

  //prevent numbers state being re-render
  // const magical = numbers.find(item => item.isMagical === true)
  // const magical = useMemo(() => numbers.find(item => item.isMagical === true), []) just one time
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);
  
  return (
    <>
      <span>Magical Number is {magical.index}</span>
      <br />
      <button onClick={handleClick}>
        count is {count}
      </button>
      <ChildComponent id={1} data="Static Data" />
      <Button locale="Bangladesh"/>
    </>
  );
}

export default App;