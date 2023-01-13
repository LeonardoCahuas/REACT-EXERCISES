import React from "react";

class Sum extends React.Component{
    render(){
        return(
            <span>{this.props.a + this.props.b} !</span>
        );
    }
}
export default Sum;
