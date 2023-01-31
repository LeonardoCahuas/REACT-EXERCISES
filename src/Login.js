import React from "react";


export class Login extends React.Component{
    state={
        username: "",
        password: "",
        remember: ""
    }
    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        const type = event.target.type;
        const checked = event.target.checked;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
        console.log(this.state)
    }
    render(){
        return(
           <div>
            <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
            <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
            <input name="remember" value={this.state.remember} onChange={this.handleChange} type="checkbox" checked={this.state.remember}/>
           </div>
        );
    }
}

export default Login;