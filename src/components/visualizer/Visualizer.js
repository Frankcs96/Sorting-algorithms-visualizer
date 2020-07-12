import React from "react";
import "./visualizer.css";
import Bar from "./Bar";

function Visualizer({ array, bubbleSortState, running, sorted }) {
  return (
    <div className="visualizer-container">
      {array.map((element, index) => {
        return (
          <Bar
            key={index}
            value={element}
            bubbleSortState={bubbleSortState}
            index={index}
            running={running}
            arraySize={array.length}
            sorted={sorted}
          />
        );
      })}
    </div>
  );
}

export default Visualizer;
