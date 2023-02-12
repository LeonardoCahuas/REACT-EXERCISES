
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


export function DisplayLanguage(){
    const language = useContext(LanguageContext)
    function changeLanguage(event){
      this.setState({
        language: event.target.value
      })
    } 
        return(
            <div>
              <select value={language} onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
              </select>
                <LanguageContext.Consumer>
                    {
                        (language) =>{
                            return <h1>{language}</h1>
                        }
                    }
                </LanguageContext.Consumer>
            </div>
        )
    }


export default DisplayLanguage