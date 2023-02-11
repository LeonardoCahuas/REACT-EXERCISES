import { useEffect, useState } from "react";

function useGitHubUser(user){
    const [data, setData] = useState(user);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    async function FetchGitHubUser(username) {
      
      try{
        const res = await fetch(`https://api.github.com/users/${username}`);
        const json = await res.json();
        setData(json)
      } catch{
        setError(true)
        setLoading(false)
      } finally{
        setLoading(false)
      }
    }
  
    useEffect(() => {
      setLoading(true);
      FetchGitHubUser(user);      
    }, [user]);
  
    return {
      Data: data,
      fetchUser: FetchGitHubUser,
      loading: loading,
      error: error

    }
  }
   
export default useGitHubUser