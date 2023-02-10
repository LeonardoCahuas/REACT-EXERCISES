import { useState } from "react"

export function UseCounter({initialValue}){
    const [counter, setCounter] = useState(initialValue)

    function increment(){
        setCounter(c => c + 1)
    }
    function decrement(){
        setCounter(c => c - 1)
    }
    function reset(){
        setCounter(0)
    }
    return(
        
        <div>
            {counter}
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
            <button type="button" onClick={reset}>reset</button>
        </div>
    )
}
export default UseCounter