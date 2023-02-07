import React from 'react'
import { ToDoList } from "./ToDoList";
import './index.css'

export class App extends React.Component{
    
    render(){
        return(
            <ToDoList render={ (items, callback) =>
                items.map((item, index) =>{ 
                return <li  key={index}>                
                {item}
                <button type="button" onClick={()=> callback(index)}>Remove</button>                    
            </li>})
            }>

            </ToDoList>
        ); 
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for JSX
In order to place a JSX expression in a prop it must be passed into curly brackets */



