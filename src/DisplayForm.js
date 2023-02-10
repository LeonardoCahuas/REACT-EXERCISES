import React from 'react'

import useForm from './useForm';

 
export function DisplayForm(props){
    const {username, password, onChange} = useForm()
    
        return(
            <div>               
               <input name="username" type="text" onChange={onChange}/>
               <input name="password" type="password" onChange={onChange}/>
               name:{username} password:{password}
            </div>
        ); 
    
}
export default DisplayForm