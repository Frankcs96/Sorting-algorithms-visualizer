import React from "react";
import "./menu.css";

function Menu(props) {
  return (
    <div>
      <button onClick={props.resetArray}> Reset array</button>
      <button onClick={props.sortArray}>Sort</button>
    </div>
  );
}

export default Menu;
