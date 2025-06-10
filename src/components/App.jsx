// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const currDate = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currDate);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <div className="container">
        <h1>{time}</h1>
        <h2>Current Time</h2>
      </div>
    </div>
  );
}

export default App;
