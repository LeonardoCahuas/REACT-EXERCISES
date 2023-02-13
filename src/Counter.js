import React from "react";
import { useState } from "react";

export function ClickCounter({inizialValue = 0}) {
    const [counter, setCounter] = useState(inizialValue)
    
    function increaseCounter(){
        setCounter(c => c + 1)
    };
   
        return(
           <div>
            <h1>{counter}</h1>
            <button type="button" onClick={increaseCounter}>Increase</button>
           </div>
        );
    }


export default ClickCounter;