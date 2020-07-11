import React from "react";
import "./visualizer.css";
import Bar from "./Bar";

function Visualizer({ array }) {
  return (
    <div className="visualizer-container">
      {array.map((element, index) => {
        return <Bar key={index} value={element} />;
      })}
    </div>
  );
}

export default Visualizer;
