import { useEffect, useState } from "react";

function useGitHubUser(user){
    const [data, setData] = useState(user);
  
    async function FetchGitHubUser(username) {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      setData(json)
    }
  
    useEffect(() => {
      FetchGitHubUser(user);
    }, [user]);
  
    return {
      Data: data,
    }
  }
   
export default useGitHubUser

