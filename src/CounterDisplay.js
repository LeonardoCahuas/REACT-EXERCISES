import React from "react";

export class DisplayCounter extends React.Component{
    render(){
        return(
            <h1>
               {this.props.count} 
            </h1>
        );
    }
}

