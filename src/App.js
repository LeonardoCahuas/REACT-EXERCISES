import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import ClickCounter from './Counter';
export class App extends React.Component{

    render(){
        return(
            <Routes>
               <Route path="/" element={<Welcome name="Leonardo"/>}/>
               <Route path="counter" element={<ClickCounter/>}/>
            </Routes>
        ); 
    }}

export default App