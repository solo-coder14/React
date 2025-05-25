import { useState, useEffect } from "react";

const Watch = ({ local }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(local);
  };

  return (
    <div className="text-center text-2xl font-mono mt-4">
      <h2 >Current Time:</h2>
      <p className="text-4xl">{formatTime(time)}</p>
    </div>
  );
};

export default Watch;
