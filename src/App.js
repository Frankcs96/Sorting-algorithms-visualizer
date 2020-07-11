import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";
import bubbleSort, { bubbleSortAnimation } from "./algorithms/bubblesort";
import debugArray from "./algorithms/debug";

function App() {
  let arraySize = 10;

  const [array, setArray] = useState(generateRandomArray(arraySize, 50, 280));
  const [bubbleSortState, setBubbleSortState] = useState({ i: 0, j: 0 });

  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 50, 280));
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
      setBubbleSortState({ i: 0, j: 0 });
    }
    //DEBUG: check if array is sorted
    console.log(debugArray(array));
    console.log(bubbleSortState.i, bubbleSortState.j);
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
