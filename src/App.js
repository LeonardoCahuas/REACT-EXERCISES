import React from 'react';
import './App.css';
import sayName  from './sayName';
export class  App extends React.Component {
  render(){
    return (
      <div>
        <h1>
          Hello, World!!!
        </h1>
        <sayName name="luca" /> 
        
      </div>
  );}
}

export default App;
