import React from "react";
import { Age } from "./age";
export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {this.props.name ? this.props.name  : "lucio"}!</p>
                {this.props.age>18 && this.props.age<55 && <Age age={this.props.age}/>}
            </div>
        );
    }
}
