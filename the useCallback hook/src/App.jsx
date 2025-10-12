import React, { useState, useCallback, memo } from "react";

const Counter = memo(({ onClick }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Increase</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  // 👇 useCallback prevents function recreation unless "count" changes
  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Counter onClick={handleIncrease} />
    </div>
  );
}
