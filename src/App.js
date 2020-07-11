import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";
import bubbleSort from "./algorithms/bubblesort";
import debugArray from "./algorithms/debug";

function App() {
  let arraySize = 40;

  const [array, setArray] = useState(generateRandomArray(arraySize, 50, 280));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (running) {
        setRunning(true);
        sortArray();
      }
    }, 10);
  }, [running]);

  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 50, 280));
  };

  const run = () => {
    setRunning(true);
  };

  const sortArray = () => {
    setArray(bubbleSort(array));
    if (debugArray(array)) {
      setRunning(false);
    }
    //DEBUG: check if array is sorted
    console.log(debugArray(array));
  };

  return (
    <div>
      <h1>Algorithms visualizer</h1>
      <Menu resetArray={() => resetArray()} run={() => run()} />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
