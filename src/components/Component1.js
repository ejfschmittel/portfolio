import React, {useContext} from 'react'
import LanguageContext from "../contexts/LanguageContext"
/*
    background image ??? 
    placeholder;

*/

const Component = () => {
    const {
        languageText
    } = useContext(LanguageContext);

    console.log(languageText)

    return(
        <section className="page-section">
            <h1>{languageText.section1.headline}</h1>
        </section>
    )
}

export default Component;