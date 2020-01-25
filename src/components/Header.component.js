import React from 'react'


const Header = () => {
    return (
        <header className="main-header">
           
            
            <input type="checkbox" id="main-nav-toggle" className="main-header__toggle-input"/>
            <label for="main-nav-toggle" className="main-header__toggle-btn">
                <span />
            </label>
            <div  className="main-header__slider-left"/>
            <div  className="main-header__slider-right"/>
            <div className="main-header__nav-wrapper">
                <nav className="main-header__nav">
                    <ul>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                        <li>Menu 4</li>
                    </ul>
                    <ul>
                        <li>German</li>
                        <li>Englisch</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;