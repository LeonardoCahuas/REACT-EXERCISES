import { useState } from "react"
import GithubUser from "./GithubUser"
export function GithubUserList(){
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")
    function handleChange(event){
        setUser(event.target.value)
        console.log(user)
    }
    
    function addUser(event){
        event.preventDefault()
        setUsers((_user) => _user.concat(user));
        setUser("")
        console.log(users)
    }
    
    return(
        
        <div>
            <form onSubmit={addUser}>
               <input type="text" onChange={handleChange} value={user}/> 
               <button type="submit">Add User</button>
            </form>
            <ul>{users.map((user) => <li><GithubUser username={user}/></li>)}</ul>
            
            
        </div>
    )
}