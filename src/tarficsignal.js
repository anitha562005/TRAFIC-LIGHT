import React, { useState } from "react";

function TrafficLight() {
  const [light, setLight] = useState("off");

  const handleManualClick = (color) => {
    setLight(color);
  };

  return (
    <div>
      <div className="traffic-light">
        <div className={`circle red ${light === "red" ? "on" : ""}`} />
        <div className={`circle yellow ${light === "yellow" ? "on" : ""}`} />
        <div className={`circle green ${light === "green" ? "on" : ""}`} />
      </div>

      <div className="buttons">
        <button onClick={() => handleManualClick("red")}>Red</button>
        <button onClick={() => handleManualClick("yellow")}>Yellow</button>
        <button onClick={() => handleManualClick("green")}>Green</button>
      </div>
    </div>
  );
}

export default TrafficLight;
