import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state={
        name: ""
    }
    
    useName = (event) => {
        const value = event.target.value;
        
        this.setState({
            name: value
        })
    }
    render(){
        return(
           <div>
            <input name="name" value={this.state.name} onChange={this.useName} type="text"/>
            <Welcome name={this.state.name}/>
           </div>
        );
    }
}

export default InteractiveWelcome;