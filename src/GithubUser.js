import React, { useEffect, useState } from "react";

export function GithubUser({username}){
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
            <h1>
              Utente: {data.name},  Location: {data.location}
            </h1>
        );
}   
export default GithubUser