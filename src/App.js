import React from 'react'

import { GithubUserList } from './GithubUserList';

 
export class App extends React.Component{
    
    render(){
        return(
            <div>
                <GithubUserList/>
            </div>
        ); 
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for 
In order to place a JSX expression in a prop it must be passed into curly brackets */



