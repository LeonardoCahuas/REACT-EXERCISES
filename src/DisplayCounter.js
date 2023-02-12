
import React from 'react'

import useCounter from './useCounter';

 
export function DisplayCounter(props){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(props.initialValue)
    
        return(
            <div>               
            {counter}
            <button type="button" onClick={onIncrement}>increment</button>
            <button type="button" onClick={onDecrement}>decrement</button>
            <button type="button" onClick={onReset}>reset</button>
        
            </div>
        ); 
    
}
export default DisplayCounter