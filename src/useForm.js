import { useState } from "react"

export function useForm(){
    const [data, setData] = useState({username:"", password:""})

    function handleChange(event){
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
         
    }
    
    return{
        username: data.username,
        password: data.password,
        onChange: handleChange,
        

    }
}
export default useForm