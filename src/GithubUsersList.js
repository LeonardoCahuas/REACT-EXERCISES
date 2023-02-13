import { useState } from "react"
import { Link, Routes } from "react-router-dom"
import GithubUser from "./GithubUser"
import { Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function GithubUserList(){
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")
    const showDetails = useNavigate()
    function handleChange(event){
        setUser(event.target.value)
        console.log(user)
    }
    
    function showUserDetails(event){
        event.preventDefault()
        setUsers((_user) => _user.concat(user));
        setUser("")
        console.log(users)
        showDetails(`/${user}`)
    }
    
    return(
        
        <div>
            <Routes>
                <Route index element={<p>Add a user and select it</p>}/>
                <Route path="users/" element={<GithubUser/>}/>
            </Routes>
            <form onSubmit={showUserDetails}>
               <input type="text" onChange={handleChange} value={user}/> 
               <button type="submit">Add User</button>
            </form>
            <Link to={`/:${user}`}>View user details</Link>
            
           
        </div>
    )
}