import React, { useState } from "react";
import "./bar.css";

function Bar(props) {
  const selectBar = () => {
    if (props.bubbleSortState.j === props.index && props.running) {
      return (
        <div className="bar bar-selected" style={{ height: props.value }}></div>
      );
    }

    if (props.arraySize - props.bubbleSortState.i <= props.index) {
      return (
        <div className="bar bar-sorted" style={{ height: props.value }}></div>
      );
    }

    if (props.sorted) {
      return (
        <div className="bar bar-sorted" style={{ height: props.value }}></div>
      );
    }

    return <div className="bar" style={{ height: props.value }}></div>;
  };

  let bar = selectBar();

  return bar;
}

export default Bar;
