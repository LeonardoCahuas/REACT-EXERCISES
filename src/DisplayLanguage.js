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
                            return <div>{Languages[language].WELCOME}</div>
                        }
                    }
                </LanguageContext.Consumer>
            </div>
        )
    }
}

export default DisplayLanguage