import React from "react";


export class Login extends React.Component{
    state={
        username: "",
        password: "",
        remember: false,
        disabled: true
    }
    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;
        const disabled = this.state.username !== "" && this.state.password !== "" ? true : false;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
            
        })
        if (disabled === true){
            this.setState({
                disabled: !disabled
            })
        }
        console.log(disabled)
    }
    reset = ()=>{
        const defaultState = {
            username: "",
            password: "",
            remember: false,
            disabled: true
        }
        this.setState(defaultState);
    }
    render(){
        return(
           <div>
            <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
            <input name="remember" value={this.state.remember} onChange={this.handleChange} type="checkbox" checked={this.state.remember}/>
            <button type="button" onClick={this.props.onLogin} name="loginButton" disabled={this.state.disabled}>Login</button>
            <button type="button" onClick={this.reset}>Reset</button>
           </div>
        );
    }
}

export default Login;
      