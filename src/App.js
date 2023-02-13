import React from 'react'
import GitHubUser from './DisplayGithubUser';

export class App extends React.Component{

    render(){
        return(
            <div>
                <GitHubUser username="LeonardoCahuas"/>
            </div>
        ); 
    }}

export default App