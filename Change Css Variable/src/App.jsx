import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleColor = () => {
    const root = document.documentElement;
    root.style.setProperty("--color", isDark ? "white" : "black");
    setIsDark(!isDark);
  };

  return (
    <div>
      <button onClick={toggleColor}>
        Toggle Color
      </button>
    </div>
  );
};

export default App;
