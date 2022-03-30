import React, {useState} from "react"

export const LanguageContext = React.createContext({})

export const LanguageProvider = ({children}) =>{
    //Language true = english
    const [language,setLanguage] = useState(true)
    return (
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}