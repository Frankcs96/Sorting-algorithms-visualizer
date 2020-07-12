import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";
import bubbleSort, { bubbleSortAnimation } from "./algorithms/bubblesort";
import debugArray from "./algorithms/debug";
import useInterval from "./hooks/useinterval";

function App() {
  let arraySize = 20;
  let speed = 40;

  const [array, setArray] = useState(generateRandomArray(arraySize, 50, 280));
  const [bubbleSortState, setBubbleSortState] = useState({ i: 0, j: 0 });
  const [running, setRunning] = useState(false);

  const resetArray = () => {
    if (!running) {
      setArray(generateRandomArray(arraySize, 50, 280));
    }
  };

  const run = () => {
    setRunning(true);
  };

  const sortArray = () => {
    setArray(bubbleSort(array, bubbleSortState.i, bubbleSortState.j));

    let bubbleSortPointers = bubbleSortAnimation(
      array,
      bubbleSortState.i,
      bubbleSortState.j
    );

    setBubbleSortState({ i: bubbleSortPointers.i, j: bubbleSortPointers.j });

    if (debugArray(array)) {
      setRunning(false);
      setBubbleSortState({ i: 0, j: 0 });
    }
    //DEBUG: check if array is sorted
    console.log(debugArray(array));
    console.log(bubbleSortState.i, bubbleSortState.j);
  };

  useInterval(sortArray, speed, running);

  return (
    <div>
      <h1>Algorithms visualizer</h1>
      <Menu resetArray={() => resetArray()} run={() => run()} />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
