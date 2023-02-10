import React, { useState } from "react";

export function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [disabled, setDisabled] = useState(true)
  function handleChange(event) {
    
    const { name, type, value, checked } = event.target;
    const disabled = login.username === "" ||  login.password === "" ? true : false;
    console.log(login)
    setLogin((logging) => ({
      ...logging,
      [name]: type === "checkbox" ? checked : value,
    }));
    setDisabled(disabled)
    
  }
  return (
    <form >
      <input name="username" value={login.username} onChange={handleChange} type="text"/>
      <input name="password" value={login.password} onChange={handleChange} type="password"/>
      <input name="remember" type="checkbox" checked={login.remember} onChange={handleChange}/>
      <button type="submit" disabled={disabled}>Login</button>
    </form>
  );
}

export default Login;
