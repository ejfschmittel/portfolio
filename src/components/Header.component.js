import React, {useState, useEffect, useContext} from 'react'

import useEventListener from "../hooks/useEventListener"
import LanguageContext from "../contexts/LanguageContext"
import {SUPPORTED_LANGUAGES} from "../content"
/*


    js check scroll
    // under certain width always use thing

*/

const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
}

const NORMAL_HEADER_CLASSES = 'main-header'
const HEADER_FULLSCREEN_CLASSES = 'main-header main-header--fullscreen-menu'


const Header = () => {
    const [headerClasses, setHeaderClasses] = useState(() => 
        isMobileDevice() || window.innerWidth <= 800 ? 
            HEADER_FULLSCREEN_CLASSES
            :
            NORMAL_HEADER_CLASSES
        )



    useEventListener(window, 'scroll', () => {
        const currentScrollPos = window.pageYOffset;
        
        if(currentScrollPos > 30 || isMobileDevice() || window.innerWidth <= 800){
            console.log("set class fullscreen")
            setHeaderClasses(HEADER_FULLSCREEN_CLASSES)
        }else{
            console.log("set normal")
            setHeaderClasses(NORMAL_HEADER_CLASSES)
        }
    }, [])
    


    return (
        <header className={headerClasses}>
           
            
            <input type="checkbox" id="main-nav-toggle" className="main-header__toggle-input"/>
            <label for="main-nav-toggle" className="main-header__toggle-btn">
                <span />
            </label>
            <div  className="main-header__slider-left"/>
            <div  className="main-header__slider-right"/>
            <div className="main-header__nav-wrapper">
                <nav className="main-header__nav">
                    <ul className="main-header__nav-ul">
                        <li className="main-header__nav-li"><a href="#">Menu 1</a></li>
                        <li className="main-header__nav-li"><a href="#">Menu 2</a></li>
                        <li className="main-header__nav-li"><a href="#">Menu 3</a></li>
                        <li className="main-header__nav-li"><a href="#">Menu 4</a></li>
                    </ul>
                    <LanguageToggler />
                </nav>
            </div>
        </header>
    )
}

const LanguageToggler = () => {
    const {
        changeLanguage,
        languageText,
        currentLanguageShortcode
    } = useContext(LanguageContext)


    const updateLanguage = (e, shortcode) => {
        e.preventDefault();
        changeLanguage(shortcode)
    }

    return (
        <ul className="main-header__nav-ul main-header__language-options">
            {Object.keys(SUPPORTED_LANGUAGES).map(key => {
                const language = SUPPORTED_LANGUAGES[key]


                const classes = currentLanguageShortcode === language.shortcode ?
                    "main-header__nav-li main-header__language-options--active":
                    "main-header__nav-li";

                return (
                    <li className={classes}>
                        <a href="#" onClick={(e) => updateLanguage(e, language.shortcode)}>{language.shortcode}</a>
                    </li>
                )
            })}

            
          
        </ul>
    )
}

export default Header;