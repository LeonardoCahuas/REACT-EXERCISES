import React from "react";
import { Cointainer } from "./Container";
import './index.css'
export class App extends React.Component{
    
    render(){
        return(
            <Cointainer>
                <h1>Welcome!</h1>
            </Cointainer>
        ); 
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for JSX
In order to place a JSX expression in a prop it must be passed into curly brackets */



