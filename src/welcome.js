import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {this.props.name ? this.props.name  : "lucio"}!</p>
                <p>Your age is: {this.props.age ? this.props.age : "unknown"}</p>
            </div>
        );
    }
}
