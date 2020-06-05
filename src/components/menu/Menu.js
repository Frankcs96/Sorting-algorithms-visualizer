import React from "react";
import "./menu.css";

function Menu(props) {

    return (
        <div>
            <button onClick={props.resetArray}> Reset array</button>
            <button>Sort</button>
        </div>
    );
}


export default Menu;