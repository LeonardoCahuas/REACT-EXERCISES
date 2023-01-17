import React from "react";
import { Welcome } from "./welcome";
export class App extends React.Component{
    render(){
        return(
            <div>
              <Welcome name={<strong>Alex</strong>} age="32"/>
            </div>
        );
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for JSX
In order to place a JSX expression in a prop it must be passed into curly brackets */



