import React from 'react';
import './App.css';
import Sayname from './sayName';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>
        Hello, World!
      </h1>
      <Sayname name="<h3> prova... </h3>"/>
      </div>
    );
  }
}

export default App;