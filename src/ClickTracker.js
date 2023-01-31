import React from "react";


export class ClickTracker extends React.Component{
    state={
        lastClicked: 0
    }
    
    handleClick = (event) => {
       this.setState({
        lastClicked: event.target.name
       })
    }
    render(){
        return(
           <div>
            <h1>Last button clicked:{this.state.lastClicked}</h1>
            <button type="button" name ="Button 1" onClick={this.handleClick}>Button 1</button>
            <button type="button" name ="Button 2" onClick={this.handleClick}>Button 2</button>
            <button type="button" name ="Button 3" onClick={this.handleClick}>Button 3</button>
           </div>
        );
    }
}

export default ClickTracker;