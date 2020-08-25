import React, { useState } from "react";
import "./menu.css";

function Menu(props) {
  const [buttonActive, setButtonActive] = useState(0);

  const activeButtonStyle = {
    color: "black",
    backgroundColor: "white",
  };
  return (
    <div id="menuContainer">
      <div id="actions">
        <button onClick={props.resetArray}> Reset array</button>
        <button onClick={props.run}>Sort</button>
        <div className="separator"></div>
      </div>

      <div id="algorithms">
        <button
          style={buttonActive === 1 ? activeButtonStyle : null}
          onClick={() => {
            props.usingAlgo(1);
            setButtonActive(1);
          }}
        >
          Bubble sort
        </button>
        <button
          style={buttonActive === 2 ? activeButtonStyle : null}
          onClick={() => {
            props.usingAlgo(2);
            setButtonActive(2);
          }}
        >
          Selection sort
        </button>
        <button
          style={buttonActive === 3 ? activeButtonStyle : null}
          onClick={() => {
            props.usingAlgo(3);
            setButtonActive(3);
          }}
        >
          Quick sort
        </button>
        <button
          style={buttonActive === 4 ? activeButtonStyle : null}
          onClick={() => {
            props.usingAlgo(4);
            setButtonActive(4);
          }}
        >
          Merge sort
        </button>
        <button
          style={buttonActive === 5 ? activeButtonStyle : null}
          onClick={() => {
            props.usingAlgo(5);
            setButtonActive(5);
          }}
        >
          Heap sort
        </button>
      </div>
    </div>
  );
}

export default Menu;
