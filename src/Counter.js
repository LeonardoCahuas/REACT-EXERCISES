import React, { useEffect, useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        setInterval(()=>{
            setCount((count)=> count + 1)}, 1000)
        return( () => clearInterval())
    }, [])
    
    
        return(
            <h1>
               {count} 
            </h1>
        );
}   
export default Counter