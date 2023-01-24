import React from "react";

export class Counter extends React.Component{
    state={
        count: 0
    }
    constructor(props){
       super(props);
       setInterval(()=>{
        this.setState({
            //parameter must be an object because it becomes the new state
            count: this.state.count + 1
        })
       }, 1000)
    }
    render(){
        return(
            <h1>
               {this.state.count} 
            </h1>
        );
    }
}
