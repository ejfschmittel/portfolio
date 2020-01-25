import React, {createContext, useState, useEffect} from "react"


import text, {SUPPORTED_LANGUAGES} from "../content"

const LanguageContext = createContext({})




export const LanguageContextProvider = ({children}) => {
    const [currentLanguageShortcode, setCurrentLanguageShortcode] = useState(SUPPORTED_LANGUAGES.englisch.shortcode)
    const [languageText, setLanguageText] = useState(text.EN)

    useEffect(() => {
        // check browser / language / origin 
        setLanguageText(text.EN)
    }, [])

    useEffect(() => {
        // check browser / language / origin 
        setLanguageText(text[currentLanguageShortcode])
    }, [currentLanguageShortcode])
    

    const changeLanguage = (shortcode) => {
        // validate shortcode
        setCurrentLanguageShortcode(shortcode)
    }

    return (
        <LanguageContext.Provider
            value={{
                changeLanguage,
                currentLanguageShortcode,
                languageText,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}



export default LanguageContext;

