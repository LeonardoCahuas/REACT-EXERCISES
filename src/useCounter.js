import { useCallback, useState } from "react"

export function useCounter({initialValue= 0}){
    const [counter, setCounter] = useState(initialValue)

    const increment = useCallback( function increment(){
        setCounter(c => c + 1)
    }, [])
    const decrement = useCallback( function decrement(){
        setCounter(c => c - 1)
    }, [])
    const reset = useCallback( function reset(){
        setCounter(0)
    }, [])
    return{
        counter: counter,
        onIncrement: increment,
        onDecrement: decrement,
        onReset: reset

    }
}
export default useCounter