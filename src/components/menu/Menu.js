import React from "react";
import "./menu.css";

function Menu(props) {
  return (
    <div>
      <button onClick={props.resetArray}> Reset array</button>
      <button onClick={props.run}>Sort</button>
    </div>
  );
}

export default Menu;
