import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function GithubUser(){
    const { username } = useParams()
    const [data, setData] = useState({name: "", location: ""})
    useEffect(()=>{
       fetch(`https://api.github.com/users/${username}`)
          .then(user => {          
            return user.json()
        })
          .then(dati=>{
            const name = dati.name
            const location = dati.location
            setData({
                name: name,
                location: location
            })   
        })
    }, [username])
    
        return(
            <div>
                <h1>
                     Utente: {data.name},  Location: {data.location}
                </h1>
                
            </div>
        );
}   
export default GithubUser