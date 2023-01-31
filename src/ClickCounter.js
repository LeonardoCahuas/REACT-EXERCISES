import React from "react";


export class ClickCounter extends React.Component{
    state={
        count: 0
    }
    
    increaseCounter = () => {
        this.setState(()=>{
            return {count: this.state.count + 1}
        })
    };
    render(){
        return(
           <div>
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.increaseCounter}>Increase</button>
           </div>
        );
    }
}

export default ClickCounter;