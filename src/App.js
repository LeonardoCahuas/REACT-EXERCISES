import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
export class App extends React.Component{

    render(){
        return(
            <Routes>
               <Route path="/" element={<Welcome name="Leonardo"/>}/>
            </Routes>
        ); 
    }}

export default App