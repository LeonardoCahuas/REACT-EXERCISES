import React from "react";

export class Cointainer extends React.Component{
    
    render(){
        return(
            <div className="bg-white border border-red-600">
            {this.props.children}
        </div>
        )
    }
}

export default Cointainer;