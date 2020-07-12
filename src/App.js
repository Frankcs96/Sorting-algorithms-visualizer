import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";
import bubbleSort, { bubbleSortAnimation } from "./algorithms/bubblesort";
import debugArray from "./algorithms/debug";
import useInterval from "./hooks/useinterval";

function App() {
  let arraySize = 40;
  let speed = 3;

  //General states
  const [array, setArray] = useState(generateRandomArray(arraySize, 50, 280));
  const [running, setRunning] = useState(false);
  const [sorted, setSorted] = useState(false);

  //Algorithms states
  const [bubbleSortState, setBubbleSortState] = useState({ i: 0, j: 0 });

  const resetArray = () => {
    if (!running) {
      setSorted(false);
      setArray(generateRandomArray(arraySize, 50, 280));
    }
  };

  const run = () => {
    if (!sorted) {
      setRunning(true);
    }
  };

  const sortArray = () => {
    setArray(bubbleSort(array, bubbleSortState.j));

    let bubbleSortPointers = bubbleSortAnimation(
      array,
      bubbleSortState.i,
      bubbleSortState.j
    );

    setBubbleSortState({ i: bubbleSortPointers.i, j: bubbleSortPointers.j });

    if (bubbleSortPointers.i >= array.length) {
      setRunning(false);
      setSorted(true);
      setBubbleSortState({ i: 0, j: 0 });
    }
    //DEBUG: check if array is sorted
    console.log(debugArray(array));
    console.log(bubbleSortState.i, bubbleSortState.j);
  };

  //custom hook to start animation
  useInterval(sortArray, speed, running);

  return (
    <div>
      <h1>Algorithms visualizer</h1>
      <Menu resetArray={() => resetArray()} run={() => run()} />
      <Visualizer
        array={array}
        bubbleSortState={bubbleSortState}
        running={running}
        sorted={sorted}
      />
    </div>
  );
}

export default App;
