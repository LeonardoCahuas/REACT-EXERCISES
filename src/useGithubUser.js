import { useEffect, useState } from "react";
async function fetchUser(url){
    const res = await fetch(url);
    const json = await res.json();
    console.log(json)
    return json
}
function useGitHubUser(user){
    const [data, setData] = useState(user);
  
    async function FetchGitHubUser(username) {
      const res = await fetchUser(`https://api.github.com/users/${username}`);
      console.log(res)
      setData(res)
    }
  
    useEffect(() => {
      FetchGitHubUser(user);
    }, [user]);
  
    return {
      Data: data,
    }
  }
   
export default useGitHubUser