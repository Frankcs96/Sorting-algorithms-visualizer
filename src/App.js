import React, {useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Visualizer from "./components/visualizer/Visualizer";
import generateRandomArray from "./utils/arraygenerator";

function App() {

    const [array, setArray] = useState(generateRandomArray(15, 50, 280));

    const resetArray = () => {
        setArray(generateRandomArray(15, 50, 280));
    }



    return (
        <div>
            <h1>Algorithms visualizer</h1>
            <Menu resetArray={() => resetArray()}/>
            <Visualizer array={array}/>
        </div>
    );
}

export default App;
