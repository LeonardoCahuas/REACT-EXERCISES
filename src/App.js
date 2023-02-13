import React from 'react'
import ClickCounter from './Counter';
import { Routes, Route, Link, } from 'react-router-dom';
import Welcome from './Welcome';
import GithubUser from './GithubUser';

export class App extends React.Component{

    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Welcome name="Leonardo"/>}/>
                    <Route path="counter" element={<ClickCounter/>}/>
                    <Route path=":username" element={<GithubUser/>}/> 
                    <Route path="*" element={<h1>Not Found</h1>}/>             
                </Routes>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to=":username">Username</Link></li>

                </ul>
            </div>
        ); 
    }}

export default App