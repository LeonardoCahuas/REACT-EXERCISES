import React from "react";

class Sum extends React.Component{
    render(){
        return(
            <h2>{this.props.a + this.props.b }</h2>
        );
    }
}
export default Sum;
