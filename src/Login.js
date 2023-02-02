import React from "react";


export class Login extends React.Component{
    
    render(){
        return(
           <div>
            <form onSubmit={this.handleFormSubmit}>
               <input name="username" defaultValue={"jon"} type="text" autoFocus/>
               <input name="password" type="password"/>
               <input name="remember" type="checkbox" checked={this.remember}/>
               <button type="button" name="loginButton" disabled={true}>Login</button>
               <button type="reset" >Reset</button>
               <button type="submit" >Submit</button>
            </form>
           </div>
        );
    }
}

export default Login;