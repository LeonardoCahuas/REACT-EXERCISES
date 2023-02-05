import React from "react";


export class Login extends React.Component{
    state={
        username: "",
        password: "",
        disabled: true,
        passLength: 0
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
        if (name === "password"){
            this.setState({
                passLength: value.length >= 8 ? true : false
            })
        }
        console.log(disabled)
    }
    render(){
        const buttonStyle1 = {
            backgroundColor: "red"
        }
        const buttonStyle2 = {
            backgroundColor: "green"
        }
        return(
           <div>
            <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
            <button type="button" style={this.state.passLength ? buttonStyle2 : buttonStyle1} onClick={this.props.onLogin} name="loginButton" disabled={this.state.disabled}>Login</button>
           </div>
        );
    }
}

export default Login;