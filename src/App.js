import React from 'react'
import FilteredList from './FilteredList';

export class App extends React.Component{
    
    render(){
        return(
            <div>
               <FilteredList li={[
                   {name:"jhon", age: 30, id:6},
                   {name: "lia", age: 17, id:3},
                   {name: "tom", age: 15, id:9},
                   {name: "sara", age: 47, id:1}
                ]}/>
            </div>
        ); 
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for 
In order to place a JSX expression in a prop it must be passed into curly brackets */



