import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import Welcome from './Welcome';
import GithubUser from './GithubUser';

export class App extends React.Component{

    render(){
        return(
            <Routes>
               <Route path="/" element={<Welcome name="Leonardo"/>}/>
               <Route path=":username" element={<GithubUser/>}/>
               
            </Routes>
        ); 
    }}

export default App