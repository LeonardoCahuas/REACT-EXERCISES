import React from "react";


export class Login extends React.Component{
    state={
        username: "",
        password: "",
        disabled: true
    }
    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const disabled = this.state.username !== "" && this.state.password !== "" ? true : false;
        this.setState({
            [name]: value
            
        })
        if (disabled === true){
            this.setState({
                disabled: !disabled
            })
        }
        console.log(disabled)
    }
    render(){
        return(
           <div>
            <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
            <button type="button" onClick={this.props.onLogin} name="loginButton" disabled={this.state.disabled}>Login</button>
           </div>
        );
    }
}

export default Login;