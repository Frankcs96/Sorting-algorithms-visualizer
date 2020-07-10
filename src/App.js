import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";
import bubbleSort from "./algorithms/bubblesort";
import debugArray from "./algorithms/debug";

function App() {
  let arraySize = 80;

  const [array, setArray] = useState(generateRandomArray(arraySize, 50, 280));

  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 50, 280));
  };

  const sortArray = () => {
    setArray(bubbleSort(array));
    //DEBUG: check if array is sorted
    console.log(debugArray(array));
  };

  return (
    <div>
      <h1>Algorithms visualizer</h1>
      <Menu resetArray={() => resetArray()} sortArray={() => sortArray()} />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
