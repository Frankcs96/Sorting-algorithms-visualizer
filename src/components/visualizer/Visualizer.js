import React, {useState} from "react";
import "./visualizer.css"
import Bar from "./Bar";
import generateRandomArray from "../../utils/arraygenerator";


function Visualizer({array}) {



    return (
        <div className="visualizer-container">
            {array.map((element, index) => {
                return <Bar key={index} value={element}/>
            })}
        </div>

    );
}


export default Visualizer;