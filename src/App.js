
import React from 'react'

import DisplayCounter from './DisplayCounter';

export class App extends React.Component{

    render(){
        return(
            <div>
               
               <DisplayCounter initialValue={10}/>
            </div>
        ); 
    }}

export default App