import React from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
    en: {
      WELCOME: "Welcome!"
    },
    it: {
      WELCOME: "Benvenuto"
    }
  }

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {
                        (language) =>{
                            return <h1>{Languages[language].WELCOME}</h1>
                        }
                    }
                </LanguageContext.Consumer>
            </div>
        )
    }
}

export default DisplayLanguage