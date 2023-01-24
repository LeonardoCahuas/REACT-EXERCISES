import React from "react";
import { DisplayCounter } from "./CounterDisplay";

export class Counter extends React.Component{
    state={
        count: this.props.initialValue
    }
    constructor(props){
       super(props);
       setInterval(()=>{
        this.setState({
            //parameter must be an object because it becomes the new state
            count: this.state.count + this.props.increment
        })
       }, this.props.interval * 1000)
    }
    render(){
        return(
        <DisplayCounter count={this.state.count}/>
        );
    }
}
