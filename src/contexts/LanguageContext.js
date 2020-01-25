import React, {createContext, useState, useEffect} from "react"


import text, {SUPPORTED_LANGUAGES} from "../content"

const LanguageContext = createContext({})




export const LanguageContextProvider = ({children}) => {

    const [languageText, setLanguageText] = useState(text.EN)

    useEffect(() => {
        // check browser / language / origin 
        setLanguageText(text.EN)
    }, [])
    

    const changeLanguage = (shortcode) => {
        // validate shortcode

        setLanguageText(text[shortcode])
    }

    return (
        <LanguageContext.Provider
            value={{
                changeLanguage,
                languageText,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}



export default LanguageContext;

