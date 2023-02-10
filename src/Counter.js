import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export function ClickCounter({inizialValue = 0}) {
    const [counter, setCounter] = useState(inizialValue)
    const onCounterChange = () =>{
        console.log(`the counter is ${counter}`)
    }
    useEffect(()=>{
       onCounterChange()
    }
    ,[counter])
    function increaseCounter(){
        setCounter(c => c + 1)
    };
   
        return(
           <div>
            <h1>{counter}</h1>
            <button type="button" className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800" onClick={increaseCounter}>Increase</button>
           </div>
        );
    }


export default ClickCounter;