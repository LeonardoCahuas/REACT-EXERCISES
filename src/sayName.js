import React from "react";

class sayName extends React.Component{
    render(){
        return(
            <div>Hello,{this.props.name} !</div>
        );
    }
}
export default sayName;
